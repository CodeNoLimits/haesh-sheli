import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import { User } from "@shared/schema";

// Extend Request interface to include authentication properties
declare global {
  namespace Express {
    interface Request {
      isAuthenticated(): boolean;
      user: User; // Remove optional since we ensure it's always set when authenticated
    }
  }
}

// Initialize Stripe with secret key (will need to be set by user)
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Mock authentication middleware with storage-backed user
  app.use(async (req, res, next) => {
    req.isAuthenticated = () => true; // Mock - always authenticated for now
    
    // Try to get existing user from storage, or create one if it doesn't exist
    let user = await storage.getUser("mock-user-id");
    if (!user) {
      user = await storage.createUser({
        username: "mock-user",
        email: "mock@example.com",
        password: "hashed-password"
      });
      // Update the user ID to be consistent
      user = await storage.updateUser(user.id, { id: "mock-user-id" });
    }
    
    req.user = user;
    next();
  });

  // Serve attached_assets images directly 
  const attachedAssetsPath = path.resolve(process.cwd(), 'attached_assets');
  
  app.use('/attached_assets', express.static(attachedAssetsPath, {
    setHeaders: (res, filePath) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
      if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      } else if (filePath.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      }
    }
  }));

  // Subscription Plans API
  app.get("/api/subscription-plans", async (req, res) => {
    try {
      const plans = await storage.getAllSubscriptionPlans();
      res.json(plans);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching subscription plans: " + error.message });
    }
  });

  // Get HoRaat Keva Plan API
  app.get("/api/subscription-plans/horat-keva", async (req, res) => {
    try {
      const plan = await storage.getSubscriptionPlan("horat_keva_99");
      if (!plan) {
        return res.status(404).json({ message: "HoRaat Keva plan not found" });
      }
      res.json(plan);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching HoRaat Keva plan: " + error.message });
    }
  });

  // Create Stripe subscription for HoRaat Keva
  app.post('/api/create-subscription', async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ 
        message: "Stripe not configured. Please set STRIPE_SECRET_KEY environment variable." 
      });
    }

    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { email, name } = req.body;
    const user = req.user;

    try {
      // Check if user already has an active subscription
      if (user.stripeSubscriptionId) {
        const subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);
        
        if (subscription.status === 'active' || subscription.status === 'trialing') {
          return res.json({
            message: "User already has an active subscription",
            subscriptionId: subscription.id,
            status: subscription.status
          });
        }
      }

      // Create or get Stripe customer
      let customerId = user.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: email || user.email,
          name: name || user.username,
          metadata: {
            userId: user.id
          }
        });
        customerId = customer.id;
        await storage.updateUserStripeInfo(user.id, customerId);
      }

      // Create subscription (requires STRIPE_PRICE_ID for HoRaat Keva plan)
      const priceId = process.env.STRIPE_PRICE_ID || "price_horat_keva_99_ils"; // Fallback ID
      
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{
          price: priceId,
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: {
          save_default_payment_method: 'on_subscription',
        },
        expand: ['latest_invoice.payment_intent'],
      });

      // Update user with subscription info
      await storage.updateUserStripeInfo(user.id, customerId, subscription.id);
      await storage.updateUserSubscriptionStatus(
        user.id, 
        subscription.status, 
        new Date(), 
        undefined
      );

      // Log subscription creation
      await storage.createSubscriptionHistory({
        userId: user.id,
        subscriptionId: subscription.id,
        eventType: 'created',
        stripeEventId: null,
        eventData: { priceId, currency: 'ils' }
      });

      res.json({
        subscriptionId: subscription.id,
        clientSecret: (subscription.latest_invoice as any)?.payment_intent?.client_secret,
        status: subscription.status
      });

    } catch (error: any) {
      console.error('Subscription creation error:', error);
      res.status(500).json({ message: "Error creating subscription: " + error.message });
    }
  });

  // Cancel subscription
  app.post('/api/cancel-subscription', async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ 
        message: "Stripe not configured. Please set STRIPE_SECRET_KEY environment variable." 
      });
    }

    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const user = req.user;

    try {
      if (!user.stripeSubscriptionId) {
        return res.status(400).json({ message: "No active subscription found" });
      }

      const subscription = await stripe.subscriptions.cancel(user.stripeSubscriptionId);
      
      // Update user subscription status
      await storage.updateUserSubscriptionStatus(
        user.id, 
        'canceled',
        user.subscriptionStartDate || undefined,
        new Date()
      );

      // Log subscription cancellation
      await storage.createSubscriptionHistory({
        userId: user.id,
        subscriptionId: subscription.id,
        eventType: 'canceled',
        stripeEventId: null,
        eventData: { canceledAt: new Date() }
      });

      res.json({
        message: "Subscription canceled successfully",
        subscription: {
          id: subscription.id,
          status: subscription.status,
          canceledAt: subscription.canceled_at
        }
      });

    } catch (error: any) {
      console.error('Subscription cancellation error:', error);
      res.status(500).json({ message: "Error canceling subscription: " + error.message });
    }
  });

  // Get user subscription status
  app.get('/api/user/subscription', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const user = req.user;
      const subscriptionHistory = await storage.getSubscriptionHistoryByUser(user.id);
      
      let stripeSubscription = null;
      if (stripe && user.stripeSubscriptionId) {
        try {
          stripeSubscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);
        } catch (error) {
          console.warn('Could not retrieve Stripe subscription:', error);
        }
      }

      res.json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          isSubscriber: user.isSubscriber,
          subscriptionStatus: user.subscriptionStatus,
          subscriptionStartDate: user.subscriptionStartDate,
          subscriptionEndDate: user.subscriptionEndDate,
          subscriptionPlanId: user.subscriptionPlanId
        },
        stripeSubscription,
        history: subscriptionHistory
      });

    } catch (error: any) {
      res.status(500).json({ message: "Error fetching subscription status: " + error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

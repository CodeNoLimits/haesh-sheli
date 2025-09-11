import { 
  type User, 
  type InsertUser, 
  type SubscriptionPlan,
  type InsertSubscriptionPlan,
  type SubscriptionHistory,
  type InsertSubscriptionHistory 
} from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User>;
  
  // Subscription user methods
  updateUserStripeInfo(id: string, stripeCustomerId: string, stripeSubscriptionId?: string): Promise<User>;
  updateUserSubscriptionStatus(id: string, status: string, startDate?: Date, endDate?: Date): Promise<User>;
  setUserAsSubscriber(id: string, isSubscriber: boolean): Promise<User>;
  
  // Subscription plans methods
  getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined>;
  getAllSubscriptionPlans(): Promise<SubscriptionPlan[]>;
  createSubscriptionPlan(plan: InsertSubscriptionPlan): Promise<SubscriptionPlan>;
  
  // Subscription history methods
  createSubscriptionHistory(history: InsertSubscriptionHistory): Promise<SubscriptionHistory>;
  getSubscriptionHistoryByUser(userId: string): Promise<SubscriptionHistory[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private subscriptionPlans: Map<string, SubscriptionPlan>;
  private subscriptionHistory: Map<string, SubscriptionHistory>;

  constructor() {
    this.users = new Map();
    this.subscriptionPlans = new Map();
    this.subscriptionHistory = new Map();
    
    // Initialize default subscription plan
    this.initializeDefaultPlans();
  }

  private initializeDefaultPlans() {
    const horatKevaPlan: SubscriptionPlan = {
      id: "horat_keva_99",
      name: "HoRaat Keva Premium",
      nameHebrew: "הוראת קבע פרימיום",
      description: "Monthly subscription with access to all digital books and 5% discount on physical books",
      descriptionHebrew: "מנוי חודשי עם גישה לכל הספרים הדיגיטליים ו-5% הנחה על ספרים פיזיים",
      price: 9900, // 99 shekels in agorot
      currency: "ILS",
      intervalType: "month",
      intervalCount: 1,
      stripePriceId: null,
      features: [
        "Free access to all digital books",
        "5% discount on all physical orders",
        "Premium member status",
        "Early access to new releases"
      ] as string[],
      featuresHebrew: [
        "גישה חופשית לכל הספרים הדיגיטליים",
        "5% הנחה על כל ההזמנות הפיזיות", 
        "סטטוס חבר פרימיום",
        "גישה מוקדמת לשחרורים חדשים"
      ] as string[],
      isActive: true,
      createdAt: new Date()
    };
    
    this.subscriptionPlans.set(horatKevaPlan.id, horatKevaPlan);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      email: insertUser.email || null, // Handle undefined -> null conversion
      stripeCustomerId: null,
      stripeSubscriptionId: null,
      subscriptionStatus: null,
      subscriptionStartDate: null,
      subscriptionEndDate: null,
      subscriptionPlanId: "horat_keva_99",
      isSubscriber: false
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Subscription user methods
  async updateUserStripeInfo(id: string, stripeCustomerId: string, stripeSubscriptionId?: string): Promise<User> {
    return this.updateUser(id, {
      stripeCustomerId,
      stripeSubscriptionId: stripeSubscriptionId || null
    });
  }

  async updateUserSubscriptionStatus(id: string, status: string, startDate?: Date, endDate?: Date): Promise<User> {
    const updates: Partial<User> = {
      subscriptionStatus: status as any,
      isSubscriber: status === 'active' || status === 'trialing'
    };
    
    if (startDate) updates.subscriptionStartDate = startDate;
    if (endDate) updates.subscriptionEndDate = endDate;
    
    return this.updateUser(id, updates);
  }

  async setUserAsSubscriber(id: string, isSubscriber: boolean): Promise<User> {
    return this.updateUser(id, { isSubscriber });
  }

  // Subscription plans methods
  async getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined> {
    return this.subscriptionPlans.get(id);
  }

  async getAllSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return Array.from(this.subscriptionPlans.values()).filter(plan => plan.isActive);
  }

  async createSubscriptionPlan(plan: InsertSubscriptionPlan): Promise<SubscriptionPlan> {
    const id = plan.id || randomUUID();
    const subscriptionPlan: SubscriptionPlan = { 
      ...plan, 
      id,
      currency: plan.currency || "ILS", // Handle undefined -> default currency
      intervalType: (plan.intervalType || "month") as "month" | "year", // Handle undefined -> default interval
      intervalCount: plan.intervalCount ?? 1, // Handle undefined -> default count of 1
      stripePriceId: plan.stripePriceId || null, // Handle undefined -> null conversion
      features: Array.isArray(plan.features) ? (plan.features as string[]) : null, // Handle undefined/invalid -> null conversion
      featuresHebrew: Array.isArray(plan.featuresHebrew) ? (plan.featuresHebrew as string[]) : null, // Handle undefined/invalid -> null conversion
      isActive: plan.isActive || null, // Handle undefined -> null conversion
      createdAt: new Date()
    };
    this.subscriptionPlans.set(id, subscriptionPlan);
    return subscriptionPlan;
  }

  // Subscription history methods
  async createSubscriptionHistory(history: InsertSubscriptionHistory): Promise<SubscriptionHistory> {
    const id = randomUUID();
    const subscriptionHistoryRecord: SubscriptionHistory = {
      ...history,
      id,
      eventType: history.eventType as 'created' | 'activated' | 'canceled' | 'renewed' | 'failed' | 'past_due', // Type assertion for enum
      stripeEventId: history.stripeEventId || null, // Handle undefined -> null conversion
      eventData: history.eventData || null, // Handle undefined -> null conversion
      createdAt: new Date()
    };
    this.subscriptionHistory.set(id, subscriptionHistoryRecord);
    return subscriptionHistoryRecord;
  }

  async getSubscriptionHistoryByUser(userId: string): Promise<SubscriptionHistory[]> {
    return Array.from(this.subscriptionHistory.values())
      .filter(history => history.userId === userId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }
}

export const storage = new MemStorage();

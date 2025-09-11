import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, json, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").unique(),
  // Stripe subscription fields
  stripeCustomerId: text("stripe_customer_id").unique(),
  stripeSubscriptionId: text("stripe_subscription_id").unique(),
  subscriptionStatus: text("subscription_status").$type<'active' | 'canceled' | 'past_due' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'unpaid' | null>(),
  subscriptionStartDate: timestamp("subscription_start_date"),
  subscriptionEndDate: timestamp("subscription_end_date"),
  subscriptionPlanId: text("subscription_plan_id").default("horat_keva_99"),
  isSubscriber: boolean("is_subscriber").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Subscription plans table
export const subscriptionPlans = pgTable("subscription_plans", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  nameHebrew: text("name_hebrew").notNull(),
  description: text("description").notNull(),
  descriptionHebrew: text("description_hebrew").notNull(),
  price: integer("price").notNull(), // in agorot (shekels * 100)
  currency: text("currency").notNull().default("ILS"),
  intervalType: text("interval_type").$type<'month' | 'year'>().notNull().default('month'),
  intervalCount: integer("interval_count").notNull().default(1),
  stripePriceId: text("stripe_price_id").unique(),
  features: json("features").$type<string[]>(),
  featuresHebrew: json("features_hebrew").$type<string[]>(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriptionPlanSchema = createInsertSchema(subscriptionPlans);
export type InsertSubscriptionPlan = z.infer<typeof insertSubscriptionPlanSchema>;
export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;

// Subscription history table for tracking subscription events
export const subscriptionHistory = pgTable("subscription_history", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  subscriptionId: text("subscription_id").notNull(),
  eventType: text("event_type").$type<'created' | 'activated' | 'canceled' | 'renewed' | 'failed' | 'past_due'>().notNull(),
  stripeEventId: text("stripe_event_id").unique(),
  eventData: json("event_data"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriptionHistorySchema = createInsertSchema(subscriptionHistory);
export type InsertSubscriptionHistory = z.infer<typeof insertSubscriptionHistorySchema>;
export type SubscriptionHistory = typeof subscriptionHistory.$inferSelect;

// Products table for real Breslov books data
export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  nameEnglish: text("name_english"),
  nameFrench: text("name_french"),
  nameSpanish: text("name_spanish"),
  nameRussian: text("name_russian"),
  description: text("description").notNull(),
  descriptionEnglish: text("description_english"),
  category: text("category").notNull(),
  subcategory: text("subcategory"),
  author: text("author").default("רבי נחמן מברסלב"),
  publisher: text("publisher").default("קרן רבי ישראל"),
  language: text("language").default("עברית"),
  pages: integer("pages"),
  isbn: text("isbn"),
  images: json("images").$type<string[]>(),
  variants: json("variants").$type<ProductVariant[]>(),
  features: json("features").$type<string[]>(),
  tags: json("tags").$type<string[]>(),
  isActive: boolean("is_active").default(true),
  isFeatured: boolean("is_featured").default(false),
});

export interface ProductVariant {
  id: string;
  format: string; // סקאי, עור, דמוי עור, למנציה
  binding: string; // רך, קשה
  size: string; // קטן, בינוני, גדול, ענק
  dimensions: string; // 12*8, 17*12, 24*17, 32*22
  volumes: number; // מספר כרכים
  price: number; // מחיר בשקלים
  originalPrice?: number;
  inStock: boolean;
  stockQuantity?: number;
}

export const insertProductSchema = createInsertSchema(products);
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Downloads table for real PDF links
export const downloads = pgTable("downloads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleEnglish: text("title_english"),
  description: text("description"),
  author: text("author"),
  category: text("category").notNull(),
  language: text("language").notNull(),
  fileUrl: text("file_url").notNull(),
  fileSize: text("file_size"),
  downloadCount: integer("download_count").default(0),
  isActive: boolean("is_active").default(true),
});

export const insertDownloadSchema = createInsertSchema(downloads);
export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Download = typeof downloads.$inferSelect;

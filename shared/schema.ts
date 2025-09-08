import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, json, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

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

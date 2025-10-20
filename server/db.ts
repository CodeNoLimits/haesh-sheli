import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Graceful fallback: allow app to run without a DATABASE_URL
// DB-backed features will be disabled; in-memory storage will be used where available
export const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null as unknown as Pool;

export const db = process.env.DATABASE_URL
  ? drizzle({ client: pool as Pool, schema })
  : null as unknown as ReturnType<typeof drizzle>;

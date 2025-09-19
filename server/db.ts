import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as schema from '@shared/schema';

neonConfig.webSocketConstructor = ws;

// Provide a graceful fallback when no database is configured so the app can still boot
if (!process.env.DATABASE_URL) {
  // Do NOT crash the server if DB is missing; expose a proxy that throws on use
  // so routes that don't require the DB can still function.
  // When the DB is used, a clear error is thrown explaining how to fix it.
  // eslint-disable-next-line no-console
  console.warn(
    'DATABASE_URL is not set. Running in degraded mode without a database. '\
    + 'Connect a database and set DATABASE_URL to enable persistence.'
  );

  export const pool: any = null;
  export const db: any = new Proxy({}, {
    get(_target, prop) {
      throw new Error(
        `Database not configured. Attempted to access db.${String(prop)}. Set DATABASE_URL to a valid Postgres connection string (e.g. Neon).`
      );
    },
  });
} else {
  export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  export const db = drizzle({ client: pool, schema });
}
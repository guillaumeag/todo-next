import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/libsql';

config({ path: ".env" });

export const db = drizzle(process.env.DATABASE_URL!);

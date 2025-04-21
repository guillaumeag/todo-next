import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/libsql';

import { todos } from "@/db/schema/todos";

config({ path: ".env" });

export const db = drizzle(process.env.DATABASE_URL!, { schema: { todos } });

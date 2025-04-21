import { sql } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id", { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  completed: integer("completed", { mode: 'boolean' }).default(false).notNull(),
  created_at: integer("created_at", { mode: 'timestamp' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updated_at: integer("updated_at", { mode: 'timestamp' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

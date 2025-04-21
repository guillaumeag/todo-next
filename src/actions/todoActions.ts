'use server'

import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { todos } from "@/db/schema/todos";
import { revalidatePath } from 'next/cache'

export async function getAll() {
  // Get all todo items from the database
  const allTodos = await db.query.todos.findMany();

  return allTodos;
};

export async function createTodo(formData: FormData) {
  
  // Build a todo object
  const todo: typeof todos.$inferInsert = {
    title: formData.get('title') as string,
  };
  
  // Insert the new todo into the database
  const newTodo = await db.insert(todos).values(todo);

  // Revalidate the path to refresh the data
  revalidatePath('/');
}

export async function deleteTodo(id: number) {
  // Delete todo item from the database using its id
  const todo = await db.delete(todos).where(eq(todos.id, id));
  
  // Revalidate the path to refresh the data
  revalidatePath("/");
};

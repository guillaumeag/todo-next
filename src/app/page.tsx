import { db } from "@/db/drizzle";
import { todos } from "@/db/schema";

const todo_items = await db.select().from(todos);

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black uppercase py-4">Todo Next</h1>
          <p className="text-current/80">This is a todo list app using Next.js</p>
          
          <ul className="text-left mt-8">
            {todo_items.map((todo) => (
              <li key={todo.id} className="py-1">
                <span className="text-lg mr-2">{todo.title}</span>
                <span className="text-sm text-gray-500">{todo.completed ? "Completed" : "Not Completed"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

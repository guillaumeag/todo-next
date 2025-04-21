import Todos from "@/app/ui/todos";
import Form from "@/app/ui/todo-form";
import { getAll } from "@/actions/todoActions";

export default async function Home() {
  // Get all todo items from the database
  const allTodos = await getAll();

  // Transform the data to match the expected Promise type
  const transformedTodos = allTodos.map(todo => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    created_at: todo.created_at,
    update_at: todo.updated_at,
  }));

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black uppercase py-4">Todo Next</h1>
          <p className="text-current/80">This is a todo list app using Next.js</p>
          
          <Form />

          <ul className="text-left mt-8">
            <Todos todos={transformedTodos} />
          </ul>
        </div>
      </div>
    </main>
  );
}

import { db } from "@/db/drizzle";
import Todos from "@/app/ui/todos";

const data = db.query.todos.findMany();

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black uppercase py-4">Todo Next</h1>
          <p className="text-current/80">This is a todo list app using Next.js</p>
          
          <ul className="text-left mt-8">
            <Todos todos={data} />
          </ul>
        </div>
      </div>
    </main>
  );
}

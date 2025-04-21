import { createTodo } from "@/actions/todoActions";

export default function Form() {
  return (
    <form action={createTodo}>
      <div className="mt-10 grid grid-cols-1 gap-y-1">
        <input required type="text" name="title" placeholder="Describe your new to-do" className="block w-full rounded-md bg-white px-3 py-3 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        <button type="submit" className="cursor-pointer rounded-full bg-gray-900 px-3 py-2 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">Add</button>
      </div>
    </form>
  );
}
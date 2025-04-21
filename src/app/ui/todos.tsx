'use client';

import { FC } from 'react';
import { todoType } from "@/types/todoType";
import { deleteTodo } from "@/actions/todoActions";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  
  // Event handler for deleting a todo item
  async function handleDelete (id: number) {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodo(id);
    }
  };

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className="py-1">
          <span className={`text-lg mr-2 ${item.completed ? 'line-through decoration-2' : '' }`}>{item.title}</span>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-400 w-16 text-red-50 p-1 cursor-pointer rounded-full text-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;

'use client';

import { FC } from 'react';
import { todoType } from "@/types/todoType";
import { deleteTodo, completeTodo } from "@/actions/todoActions";

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

  // Event handler for completing a todo item
  async function handleToggleCompleted (id: number, completed: boolean) {
    completeTodo(id, completed);
  };

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className="py-1">
          <input
            type="checkbox"
            className="inline-block align-middle mr-2 cursor-pointer size-4"
            defaultChecked={item.completed}
            onChange={() => handleToggleCompleted(item.id, !item.completed)}
          />
          <span className={`inline-block align-middle text-lg mr-2 ${item.completed ? 'line-through decoration-2' : '' }`}>{item.title}</span>
          <button
            onClick={() => handleDelete(item.id)}
            className="inline-block align-middle text-red-200 hover:text-red-500 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;

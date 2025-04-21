'use client';

import { FC } from 'react';
import { todoType } from "@/types/todoType";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className="py-1">
          <span className="text-lg mr-2">{item.title}</span>
          <span className="text-sm text-gray-500">{item.completed ? "Completed" : "Not Completed"}</span>
        </li>
      ))}
    </ul>
  );
};

export default Todos;

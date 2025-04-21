'use client';

import { use } from 'react';

export default function Todos({
    todos,
  }: {
    todos: Promise<{ id: number; title: string, completed: boolean, created_at: Date, update_at: Date }[]>
  }) {

  const todo_items = use(todos);

  return (
    <ul>
      {todo_items.map((item) => (
        <li key={item.id} className="py-1">
          <span className="text-lg mr-2">{item.title}</span>
          <span className="text-sm text-gray-500">{item.completed ? "Completed" : "Not Completed"}</span>
        </li>
      ))}
    </ul>
  );
};
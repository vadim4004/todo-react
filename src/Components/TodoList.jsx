import React from 'react';
import { Todo } from './Todo';
import { useSelector } from 'react-redux';

import '../App.css';

export const TodoList = () => {
  let todos = useSelector((state) => state?.todos);

  return (
    <div className="todo-list">
      {todos.map((todo, i) => {
        return <Todo key={i} todo={todo} />;
      })}
    </div>
  );
};

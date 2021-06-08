import React from 'react';
import { Todo } from './Todo';
import { useSelector } from 'react-redux';

import '../App.css';

export const TodoList = ({ completeTask, removeTask }) => {
  let todos = useSelector((state) => state.todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

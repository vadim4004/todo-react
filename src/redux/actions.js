import * as types from './types';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: types.DELETE_TODO,
  payload: todoId,
});

export const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});

import * as types from './types';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: types.DELETE_TODO,
  payload: todoId,
});

export const updateTodo1 = (id, name) => ({
  type: types.UPDATE_TODO,
  payload: { id, name },
});

export const updateTodo = (todo) => (dispatch, getState) => {
  let newTodo = getState().todos.filter((td) => td.id !== todo.id);
  newTodo.push(todo);
  newTodo.sort((a, b) => a.id - b.id);

  dispatch({ type: types.UPDATE_TODO, payload: newTodo });
};

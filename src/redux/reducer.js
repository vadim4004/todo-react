import * as types from './types';

let initialState = {
  todos: [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' },
  ],
  text: '',
};

export function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case types.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case types.UPDATE_TODO:
      console.log('update');
      return { ...state, todos: ([...state.todos].name = payload) };
    default:
      return state;
  }
}

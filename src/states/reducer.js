import { ACTION_TYPES } from "./actionTypes";
export const INITIAL_STATE = {
  todos: [],
  completed: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTION_TYPES.REMOVE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};

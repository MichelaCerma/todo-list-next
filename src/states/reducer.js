import { todos } from "@/mocks/todolist";
import { ACTION_TYPES } from "./actionTypes";
export const INITIAL_STATE = {
  todos: todos,
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
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };
    case ACTION_TYPES.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

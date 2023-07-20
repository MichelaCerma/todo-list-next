import styles from "./Todo.module.scss";

import { MainContext } from "@/states";
import { ACTION_TYPES } from "@/states/actionTypes";
import { useContext } from "react";
const Todo = ({ todo }) => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleDelete = () => {
    dispatch({
      type: ACTION_TYPES.REMOVE_TODO,
      payload: todo.id,
    });
  };
  const onHandleToggle = () => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_TODO,
      payload: todo.id,
    });
  };

  return (
    <>
      <h2
        onClick={onHandleToggle}
        className={`${styles.todo} ${
          todo.completed === true ? styles.completed : styles.uncompleted
        }`}
      >
        {todo.todo}
      </h2>
      <button onClick={onHandleDelete}>delete</button>
    </>
  );
};
export default Todo;

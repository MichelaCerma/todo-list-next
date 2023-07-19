import styles from "./Todo.module.scss";

import { MainContext } from "@/states";
import { useContext } from "react";
const Todo = ({ todo }) => {
  return (
    <>
      <h2
        className={`${styles.todo} ${
          todo.completed === true ? styles.completed : styles.uncompleted
        }`}
      >
        {todo.todo}
      </h2>
    </>
  );
};
export default Todo;

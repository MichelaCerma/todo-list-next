import styles from "./TodoList.module.scss";
import { useContext } from "react";
import { MainContext } from "@/states";
import Todo from "../todos";
import InputText from "../inputText";


const TodoList = () => {
  const todoData = useContext(MainContext);

  return (
    <>
      {todoData.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};
export default TodoList;

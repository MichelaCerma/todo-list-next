import { useReducer, useState } from "react";
import { useContext } from "react";
import { MainContext } from "@/states";
import styles from "./InputText.module.scss";
import { INITIAL_STATE, reducer } from "@/states/reducer";
import { ACTION_TYPES } from "@/states/actionTypes";
import Todo from "../todos";

const InputText = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [inputTodo, setInputTodo] = useState("");

  const onHandleInput = (e) => {
    setInputTodo(e.target.value);
  };
  const onHandleSumbmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: {
        id: Math.floor(Math.random() * 1000000),
        completed: false,
        todo: inputTodo,
      },
    });
    setInputTodo("");
  };

  return (
    <>
      <form onSubmit={onHandleSumbmit}>
        <input
          type="text"
          className={styles.input}
          value={inputTodo}
          onChange={onHandleInput}
        />

        <input type="submit" value="+" />
      </form>
      {state?.todos.map((todo) => (
        <>
          <Todo todo={todo} key={todo.id} />
        </>
      ))}
    </>
  );
};

export default InputText;

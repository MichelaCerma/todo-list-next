import { useReducer, useState } from "react";
import styles from "./InputText.module.scss";
import { INITIAL_STATE, InputReducer } from "@/states/reducer";

const InputText = () => {
  const [states, dispatch] = useReducer(InputReducer, INITIAL_STATE);
  const [inputTodo, setInputTodo] = useState();
  const onHandleInput = (e) => setInputTodo(e.target.value);
  const onHandleSumbmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: e.target.value });
    setInputTodo(e.target.value);
  };
  console.log(states);
  return (
    <>
      <form onSubmit={onHandleSumbmit}>
        <input type="text" className={styles.input} onChange={onHandleInput} />

        <input type="submit" value="" />
      </form>
      <p>{inputTodo}</p>
    </>
  );
};

export default InputText;

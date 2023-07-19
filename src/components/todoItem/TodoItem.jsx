import { useContext } from "react";
import { MainContent } from "@/store";
const TodoItem = () => {
  const { state, dispatch } = useContext(MainContent);

  return (
    <>
      <div>
        <p>{state.username}</p>
        <button
          onClick={() => dispatch({ type: "SET_USER", pippo: "Giovanni" })}
        >
          Change Name
        </button>
      </div>
    </>
  );
};
export default TodoItem;

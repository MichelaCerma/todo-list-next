import "./Todo.module.scss";
const Todo = ({ todo }) => {
  return (
    <>
      <h2>{todo.todo}</h2>
      <h3>{todo.id}</h3>
    </>
  );
};
export default Todo;

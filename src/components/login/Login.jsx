import { useState } from "react";
import styles from "./Login.module.scss";
const Login = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("")

  const onHandleSumbmit = (e) => {
    
}
const onHandleChange = (e) => {
    setInputUsername(e.target.value)
}
  return (
    <>
      <form onSubmit={onHandleSumbmit}>
        <input type="text" name="username" placeholder="Username" value={inputUsername} onChange={onHandleChange}/>
        <input type="submit" value={inputUsername} />
      </form>
    </>
  );
};
export default Login;

import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);
  const submitData = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login Form</h2>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default Login;

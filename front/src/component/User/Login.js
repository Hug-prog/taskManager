import React, { useState } from "react";
import { login } from "../../api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email: email, password: password };
    login(user);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>email</label>
        <input onChange={handleEmail} />
        <label>password</label>
        <input onChange={handlePassword} />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default Login;

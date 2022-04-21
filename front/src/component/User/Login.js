import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email: email, password: password };
    dispatch(login(user));
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>email</label>
        <input onChange={handleEmail} />
        <label>password</label>
        <input onChange={handlePassword} />
        <button type="submit">sign in</button>
      </form>
    </div>
  );
};

export default Login;

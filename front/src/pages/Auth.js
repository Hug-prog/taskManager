import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../component/User/Login";
import Register from "../component/User/Register";

const Auth = () => {
  const [showFormRegister, setShowFormRegister] = useState(false);
  const [showFormLogin, setShowFormLogin] = useState(false);
  return (
    <div>
      <button onClick={() => setShowFormRegister(!showFormRegister)}>
        Register
      </button>
      {showFormRegister ? <Register /> : ""}
      <button onClick={() => setShowFormLogin(!showFormLogin)}>Login</button>
      {showFormLogin ? <Login /> : ""}
      <Link to={"/home"}>home</Link>
    </div>
  );
};
export default Auth;

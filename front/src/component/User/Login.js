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
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={e => handleSubmit(e)}>
        <label className="block text-white">email</label>
        <input onChange={handleEmail} />
        <label className="block text-white">password</label>
        <input className="block" onChange={handlePassword} />
        <button
          className=" mt-8 ml-6 bg-gray p-2 w-32 rounded text-white"
          type="submit"
        >
          sign in
        </button>
      </form>
    </div>
  );
};

export default Login;

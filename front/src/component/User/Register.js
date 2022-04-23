import React, { useState } from "react";
import { register } from "../../api";

const Register = () => {
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
    register(user);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={e => handleSubmit(e)}>
        <label className="block text-white">email</label>
        <input className=" rounded" onChange={handleEmail} />
        <label className="block text-white">password</label>
        <input className="block rounded" onChange={handlePassword} />
        <button
          className=" mt-8 ml-6  bg-gray p-2 w-32 rounded text-white"
          type="submit"
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default Register;

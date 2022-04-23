import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../component/User/Login";
import Register from "../component/User/Register";

const Auth = () => {
  const [showFormRegister, setShowFormRegister] = useState(true);
  const [showFormLogin, setShowFormLogin] = useState(false);
  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-20 m-auto flex justify-end items-center ">
        <div className="w-auto h-auto">
          <button
            className=" mr-5 bg-gray p-2 w-32 rounded text-white"
            onClick={() => {
              setShowFormRegister(!showFormRegister);
              setShowFormLogin(!showFormLogin);
            }}
          >
            Register
          </button>
          <button
            className=" mr-5 bg-gray p-2 w-32 rounded text-white"
            onClick={() => {
              setShowFormLogin(!showFormLogin);
              setShowFormRegister(!showFormRegister);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="w-screen h-2/3 mt-7 flex justify-center items-center">
        <div className=" w-4/5 sm:w-2/5 h-96 bg-gradient-to-r from-blueMain to-bluelight rounded">
          {showFormRegister ? <Register /> : ""}
          {showFormLogin ? <Login /> : ""}
        </div>
      </div>
      <div className=" w-auto h-auto text-center">
        <Link className="bg-gray p-2 w-32 rounded text-white" to={"/home"}>
          home
        </Link>
      </div>
    </div>
  );
};
export default Auth;

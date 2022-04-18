import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../api";

const FormTodo = ({ id }) => {
  const [inputName, setIputName] = useState("");
  const [inputSate, setIputSate] = useState(false);
  const dispatch = useDispatch();

  const handleName = (e) => {
    setIputName(e.target.value);
  };

  const handleState = (e) => {
    setIputSate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { name: inputName, state: inputSate };
    dispatch(addTodo(todo, id));
  };

  return (
    <div className="h-screen w-64 fixed bg-blueMain top-0 left-0 pt-60 z-10 ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="block mb-3 ml-2">name</label>
        <input
          className="block ml-5 "
          type="text"
          name="name"
          onChange={handleName}
        />

        <label className="block mt-5 ml-2">state</label>
        <select className="block ml-5 mt-2 " name="sate" onChange={handleState}>
          <option value="">--choose option--</option>
          <option value={true}>primary</option>
          <option value={false}>secondary</option>
        </select>
        <button className="mt-10 ml-16 bg-gray p-3 rounded " type="submit">
          addTodo
        </button>
      </form>
    </div>
  );
};

export default FormTodo;

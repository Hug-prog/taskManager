import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNameTodolistById } from "../../api";

const UpdateTodolist = ({ id }) => {
  const dispatch = useDispatch();
  const [updateName, setUpdateName] = useState("");

  const handleUpdateName = e => {
    setUpdateName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const UpdateTodolist = { newName: updateName };
    dispatch(updateNameTodolistById(id, UpdateTodolist));
  };

  return (
    <div className="h-screen w-80 fixed bg-blueMain top-0 right-0 pt-60 z-10 ">
      <form className="w-1/2 h-1/2 m-auto" onSubmit={e => handleSubmit(e)}>
        <label className="block mb-3">name</label>
        <input
          className="block"
          placeholder="update name"
          value={updateName}
          onChange={e => handleUpdateName(e)}
        />
        <button className="mt-10 bg-gray p-3 rounded" type="submit">
          update
        </button>
      </form>
    </div>
  );
};

export default UpdateTodolist;

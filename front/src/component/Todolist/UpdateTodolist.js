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
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          placeholder="update name"
          value={updateName}
          onChange={e => handleUpdateName(e)}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateTodolist;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNameTodolistById } from "../../api";

const UpdateTodolist = ({ id }) => {
  const dispatch = useDispatch();
  const [updateName, setUpdateName] = useState("");
  const handleUpdateName = (e) => {
    setUpdateName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.prevntDeflaut();
    dispatch(updateNameTodolistById(id, updateName));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="update name" onChange={handleUpdateName} />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateTodolist;

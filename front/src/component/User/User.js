import React, { useEffect, useState } from "react";
import Todolist from "../Todolist/Todolist";
import { getTodolistByUser } from "../../api/index";
import { useDispatch, useSelector } from "react-redux";

function User({ user }) {
  const todolists = useSelector((state) => state.todolistsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodolistByUser(user._id));
  }, [dispatch]);

  return (
    <div className="User">
      <p>user {user._id}</p>
      <p>email {user.email}</p>
      {todolists.map((todolist, i) => (
        <Todolist todolist={todolist} key={i} />
      ))}
    </div>
  );
}

export default User;

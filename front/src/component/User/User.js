import React, { useEffect } from "react";
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
    <div className="bg-white w-5/6 h-auto pb-14 m-auto shadow-lg shadow-white-500/50 rounded ">
      <p className="p-8 text-xl ">Hello user {user.email}</p>
      <div className=" w-5/6 h-5/6 md:flex md:flex-wrap m-auto">
        {todolists
          ? todolists.map((todolist, i) => (
              <Todolist todolist={todolist} key={i} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default User;

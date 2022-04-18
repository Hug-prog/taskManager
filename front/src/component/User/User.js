import React, { useEffect, useState } from "react";
import Todolist from "../Todolist/Todolist";
import { getTodolistByUser } from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import AddTodolist from "../Todolist/AddTodolist";

function User({ user }) {
  const todolists = useSelector(state => state.todolistsReducer);
  const [showBtnAddTodolist, setShowBtnAddTodolist] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodolistByUser(user._id));
  }, [dispatch]);

  return (
    <div className="bg-white w-5/6 h-auto pb-14 m-auto shadow-lg shadow-white-500/50 rounded ">
      <p className="p-8 text-xl ">Hello user {user.email}</p>
      <div className=" w-5/6 h-5/6 md:flex md:flex-wrap m-auto relative">
        {todolists
          ? todolists.map((todolist, i) => (
              <Todolist todolist={todolist} key={i} />
            ))
          : ""}
        <div>
          <button
            className="absolute bottom-1 right-5 bg-gray p-2 rounded text-white"
            onClick={() => setShowBtnAddTodolist(!showBtnAddTodolist)}
          >
            Add Todolist
          </button>
        </div>

        {showBtnAddTodolist ? <AddTodolist id={user._id} /> : ""}
      </div>
    </div>
  );
}

export default User;

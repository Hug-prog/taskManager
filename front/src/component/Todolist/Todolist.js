import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodolist } from "../../api";

function Todolist({ todolist }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-to-r from-blueMain to-bluelight w-5/6 md:w-56 lg:w-80 m-auto h-32 mt-2 pl-6 pt-7 md:ml-5 ">
      <Link to={"/todolist/" + todolist._id} state={todolist._id}>
        <p className="text-lg text-white">{todolist.name}</p>
      </Link>
      <button
        className="bg-bluelight w-32 md:w-24 lg:w-48 rounded-lg mt-5 p-1 text-white"
        onClick={() => dispatch(deleteTodolist(todolist._id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Todolist;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../api";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-56 md:w-60 lg:w-80 h-40 pl-6 pt-7 m-6">
      <p>name : {todo.name}</p>
      <p>state: {todo.state ? <span>primary</span> : <span>secondary</span>}</p>
      <button
        className="bg-gray w-36 lg:w-48 rounded py-1 text-white mt-4 "
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        delete
      </button>
    </div>
  );
};

export default Todo;

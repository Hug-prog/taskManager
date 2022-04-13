import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTodosByIdTodolist } from "../api";
import Todo from "../component/Todo/Todo";
import FormTodo from "../component/Todolist/FormTodo";
import UpdateTodolist from "../component/Todolist/UpdateTodolist";

const Todolist = () => {
  const todolist = useSelector((state)=>state.todolistsReducer);
  const todos = useSelector((state) => state.todosReducer);
  const [showForm, setShowForm] = useState(false);
  const [showBtnUp, setShowBtnUp] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTodosByIdTodolist(location.state));
  }, [dispatch]);
  return (
    <div className="w-screen h-screen flex justify-center static ">
      <div className="absolute top-5 right-5 bg-gray p-2 rounded text-white">
        <button onClick={() => setShowForm(!showForm)}>add todo</button>
      </div>

      <div>
        <button onClick={() => setShowBtnUp(!showBtnUp)}>up</button>
      </div>

      {showBtnUp ? <UpdateTodolist id={location.state} /> : ""}

      {showForm ? <FormTodo id={location.state} /> : ""}

      <div className="bg-gradient-to-r from-blueMain to-bluelight w-5/6 h-5/6 flex flex-wrap m-auto rounded">
        {/* <h1>{location.state.name}</h1> */}
        {todos ? todos.map((todo, i) => <Todo todo={todo} key={i} />) : ""}
      </div>
    </div>
  );
};

export default Todolist;

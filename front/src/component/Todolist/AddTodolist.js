import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodlistByUserId } from "../../api";

const AddTodolist = ({ id }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleName = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todolist = { name: name };
    dispatch(addTodlistByUserId(id, todolist));
  };

  return (
    <div className=" w-2/5 h-2/5 bg-bluelight z-1 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white-500/50 rounded ">
      <form onSubmit={e => handleSubmit(e)}>
        <label className="text-white block">Name</label>
        <input onChange={handleName} />
        <button
          className="bg-gray p-2 w-32 rounded text-white ml-6"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AddTodolist;

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
    <div className=" w-64 md:w-72 h-60 lg:w-1/2 lg:h-1/2 bg-bluelight z-1 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white-500/50 rounded ">
      <form onSubmit={e => handleSubmit(e)}>
        <label className="text-white block mb-6 lg:mb-3">Name</label>
        <input
          className="block lg:inline-block mb-8 lg:mb-5 "
          onChange={handleName}
        />
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

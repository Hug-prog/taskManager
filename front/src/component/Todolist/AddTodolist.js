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
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>name</label>
        <input onChange={handleName} />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default AddTodolist;

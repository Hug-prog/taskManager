import React from "react";

function Todolist({ todolist }) {
  return (
    <div className="Todolist">
      <p>todolist: {todolist._id}</p>
      <p>name : {todolist.name}</p>
    </div>
  );
}

export default Todolist;

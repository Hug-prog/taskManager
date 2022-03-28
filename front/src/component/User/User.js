import React, { useEffect, useState } from "react";
import Todolist from "../Todolist/Todolist";
import { API, getTodolistsByUserId } from "../../api/index";

function User({ user }) {
  const [todolists, setTodolists] = useState([]);

  useEffect(() => {
    const initTodolists = async () => getTodolistsByUserId(user);
    //await setTodolists(initTodolists);
    console.log("t", initTodolists);
    /*
    API.get("/todolists/user/" + user._id).then((res) => {
      console.log(res.data);
      setTodolists(res.data);
    });
    */
  }, []);

  return (
    <div className="User">
      <p>user {user._id}</p>
      <p>email {user.email}</p>
      {todolists
        ? todolists.map((todolist, i) => (
            <Todolist todolist={todolist} key={i} />
          ))
        : ""}
    </div>
  );
}

export default User;

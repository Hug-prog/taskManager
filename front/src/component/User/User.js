import React, { useEffect, useState } from "react";
import Todolist from "../Todolist/Todolist";
<<<<<<< HEAD
import { API, getTodolistsByUserId } from "../../api/index";
=======
import { getTodolistByUser } from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 4a30704d4373e5ec0ead600b62213cbd58f08b84

function User({ user }) {
  const todolists = useSelector((state) => state.todolistsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
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
=======
    dispatch(getTodolistByUser(user._id));
  }, [dispatch]);
>>>>>>> 4a30704d4373e5ec0ead600b62213cbd58f08b84

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

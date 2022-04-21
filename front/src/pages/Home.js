import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../component/User/User";
import { GET_USER } from "../constants/user";

export default function Home() {
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch({ type: GET_USER });
  }, [dispatch]);

  return (
    <div className="max-w-screen-4xl truncate w-screen h-screen ">
      <p>home</p>
      <div className="w-screen h-screen">{<User user={user} />}</div>
    </div>
  );
}

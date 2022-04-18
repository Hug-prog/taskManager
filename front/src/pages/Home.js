import React, { useEffect, useState } from "react";
import { API } from "../api";
import User from "../component/User/User";
//import { useDispatch } from "react-redux";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="max-w-screen-4xl truncate w-screen h-screen ">
      <p>home</p>
      <div className="flex justify-center w-screen h-screen">
        {users.map((user, i) => (
          <User user={user} key={i} />
        ))}
      </div>
    </div>
  );
}

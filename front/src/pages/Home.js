import React, { useEffect, useState } from "react";
import { API } from "../api";
import User from "../component/User/User";
//import { useDispatch } from "react-redux";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <p>home</p>
      <div>
        {users.map((user, i) => (
          <User user={user} key={i} />
        ))}
      </div>
    </div>
  );
}

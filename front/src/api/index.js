import axios from "axios";
import React from "react";
//process.env.REACT_APP_CONNEXION_URL
export const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

export const getTodolistsByUserId = (user) =>
  API.get("/todolists/user/" + user._id).then((res) => {
    console.log(res.data);
    return res.data;
  });

import axios from "axios";
import React from "react";
import { DELETE_TODOLIST, GET_TODOLISTS } from "../constants/todolists";
//process.env.REACT_APP_CONNEXION_URL
export const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

<<<<<<< HEAD
export const getTodolistsByUserId = (user) =>
  API.get("/todolists/user/" + user._id).then((res) => {
    console.log(res.data);
    return res.data;
  });
=======
export const getTodolistByUser = (id) => {
  return (dispatch) => {
    API.get("/todolists/user/" + id)
      .then((res) => {
        return dispatch({ type: GET_TODOLISTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteTodolist = (id) => {
  return (dispatch) => {
    API.delete("/todolists/" + id)
      .then((res) => dispatch({ type: DELETE_TODOLIST, payload: id }))
      .catch((err) => console.log(err));
  };
};
>>>>>>> 4a30704d4373e5ec0ead600b62213cbd58f08b84

import axios from "axios";
import {
  DELETE_TODOLIST,
  GET_TODOLISTS,
  UPDATE_NAME,
} from "../constants/todolists";
import { ADD_TODO, DELETE_TODO, GET_TODO } from "../constants/todos";
//process.env.REACT_APP_CONNEXION_URL
export const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

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

export const deleteTodo = (id) => {
  return (dispatch) => {
    API.delete("/todos/" + id)
      .then((res) => dispatch({ type: DELETE_TODO, payload: id }))
      .catch((err) => console.log(err));
  };
};

export const getTodosByIdTodolist = (id) => {
  return (dispatch) => {
    API.get("/todos/todolists/" + id)
      .then((res) => {
        return dispatch({ type: GET_TODO, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addTodo = (todo, todolistId) => {
  return (dispatch) => {
    API.post("/todos/todolists/" + todolistId, todo)
      .then((res) => {
        return dispatch({ type: ADD_TODO, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateNameTodolistById = (todolistId, newName) => {
  return (dispatch) => {
    API.patch("/todolists/" + todolistId, newName)
      .then((res) => {
        return dispatch({ type: UPDATE_NAME, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

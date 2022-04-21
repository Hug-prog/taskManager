import { combineReducers } from "redux";
import todolistsReducer from "./todolistsReducer";
import todosReducer from "./todosReducer";
import userReducer from "./userReducer";
export default combineReducers({
  todolistsReducer,
  todosReducer,
  userReducer,
});

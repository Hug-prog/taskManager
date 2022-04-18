import { combineReducers } from "redux";
import todolistsReducer from "./todolistsReducer";
import todosReducer from "./todosReducer";
export default combineReducers({
  todolistsReducer,
  todosReducer,
});

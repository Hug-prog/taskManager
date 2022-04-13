import {
  DELETE_TODOLIST,
  GET_TODOLISTS,
  UPDATE_NAME,
} from "../constants/todolists";

const initialState = [];

export default function todolistsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOLISTS:
      return action.payload;
    case DELETE_TODOLIST:
      return state.filter((todolist) => todolist._id !== action.payload);
    case UPDATE_NAME:
      return state.map((todolist)=>{
        if(todolist._id === action.payload._id){
          return action.payload;
        }else return todolist;
      });
    default:
      return state;
  }
}

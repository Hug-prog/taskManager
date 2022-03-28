import { DELETE_TODOLIST, GET_TODOLISTS } from "../constants/todolists";

const initialState = [];

export default function todolistsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOLISTS:
      return action.payload;
    case DELETE_TODOLIST:
      return;
    default:
      return state;
  }
}

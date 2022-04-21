import { GET_USER, SET_USER } from "../constants/user";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return (state = action.payload.user);
    case GET_USER:
      console.log(state);
      return state;
    default:
      return state;
  }
}

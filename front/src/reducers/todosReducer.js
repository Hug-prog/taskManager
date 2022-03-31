import { ADD_TODO, DELETE_TODO, GET_TODO } from "../constants/todos";
const initialState = [];
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case GET_TODO:
      return action.payload;
    case DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload);
    default:
      return state;
  }
}

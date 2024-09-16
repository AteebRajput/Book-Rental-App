import { act } from "react";
import { Add_Task, Remove_Task } from "../type/type";

const initialState = {
  cart: [
    
  ],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case Add_Task:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case Remove_Task:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      break;
  }
};

export { initialState, cartReducer };

import { Add_Favorite, Remove_Favorite } from "../type/type";

const initialFavbook = {
  cart: [],
};

const favReducer = (state, action) => {
  switch (action.type) {
    case Add_Favorite:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case Remove_Favorite:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// If you need to log cart contents, do it outside the reducer or in a middleware/logger


export { initialFavbook, favReducer ,logCart};

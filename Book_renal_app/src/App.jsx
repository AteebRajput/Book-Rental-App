import { useReducer, useState } from "react";
import Main from "./component/Main";
import { BookContext, ThemeContext, FavouriteContext } from "./context";
import { cartReducer, initialState } from "./Reducers/cartReducers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { favReducer, initialFavbook } from "./Reducers/favouriteBookReducer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Use a boolean to control dark mode
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [Bookstate, Bookdispatch] = useReducer(favReducer, initialFavbook)

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BookContext.Provider value={{ state, dispatch }}>
          <FavouriteContext.Provider value={{ Bookstate , Bookdispatch }}>

          <Main />
          <ToastContainer />
          </FavouriteContext.Provider>
        </BookContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

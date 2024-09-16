import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trendingbooks from "./component/Trending-books.jsx";
import NewReleases from "./component/NewReleases.jsx";
import FavouriteBooks from "./component/FavouriteBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/trending-books",
        element: <Trendingbooks />
      },
      {
        path: "/new-releases",
        element: <NewReleases />
      },
      {
        path: "/favourites",
        element: <FavouriteBooks />
      },
      {
        path: "/watchlater",
        element: <Home />
      }
]
}
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

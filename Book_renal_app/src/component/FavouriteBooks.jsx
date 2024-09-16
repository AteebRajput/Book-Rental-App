import React, { useContext, useState } from 'react';
import { FavouriteContext } from '../context/index';
import { CiHeart } from 'react-icons/ci';
import { IoStar } from 'react-icons/io5';
import { getAllBooks } from "../data/booksData";
import { BookContext } from "../context";
import { Add_Task, Remove_Task } from "../type/type";
import { toast } from "react-toastify";
import { Add_Favorite, Remove_Favorite } from "../type/type";


const FavouriteBooks = () => {
  
  const books = getAllBooks();
  const [showModel, setShowModel] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { state, dispatch } = useContext(BookContext); // Cart context
  const { Bookstate, Bookdispatch } = useContext(FavouriteContext); // Favorite context

  const addToCart = (event, book) => {
    event.stopPropagation();
    const found = state.cart.find((item) => item.id === book.id);
    if (!found) {
      dispatch({
        type: Add_Task,
        payload: book,
      });
      toast.success(`Added "${book.title}" to cart`, {
        position: "top-right",
      });
    } else {
      toast.error(`"${book.title}" is already in cart`, {
        position: "top-right",
      });
    }
  };

  const bookSelection = (book) => {
    setShowModel(true);
    setSelectedBook(book);
  };

  const closeSelection = () => {
    setShowModel(false);
    setSelectedBook(null);
  };

  const toggleAddFavourite = (book) => {
    const foundInFavorites = Bookstate.cart.find((item) => item.id === book.id);
    console.log(foundInFavorites);

    if (!foundInFavorites) {
      Bookdispatch({
        type: Add_Favorite,
        payload: book,
      });
      toast.success(`Added "${book.title}" to favorites`, {
        position: "top-right",
      });
    } else {
      Bookdispatch({
        type: Remove_Favorite,
        payload: book,
      });
      toast.error(`Removed "${book.title}" from favorites`, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Bookstate.cart && Bookstate.cart.length > 0 ? (
        Bookstate.cart.map((item, index) => (
          <div key={index}>
            <figure className="p-4 border w-100 h-[600px] border-black/10 shadow-xl dark:border-white/10 rounded-xl">
            <a href="#">
              <div className="relative">
                <button onClick={() => toggleAddFavourite(item)}>
                  <CiHeart className="absolute top-[-10px] right-0 h-8 w-8 hover:text-green-500" />
                </button>
                <img
                  className="w-[250px] h-[350px] object-cover rounded-lg"
                  src={item.cover}
                  alt={item.title}
                  onClick={() => bookSelection(item)}
                />
                <h2 className="text-center font-bold text-xl pt-3 font-poppins tracking-wider mb-1">
                  {item.title}
                </h2>
                <p className="text-center text-md text-neutral-400 font-semibold">
                  {item.genre}
                </p>

                <div className="flex justify-center mt-2 gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <IoStar key={i} className="text-green-400 gap-1" />
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={(e) => addToCart(e, item)}
                  className="rounded-lg font-bold bg-green-400 px-4 py-2 text-center hover:scale-110 transition-transform duration-300"
                >
                  {`$${item.price} | Add to cart`}
                </button>
              </div>
            </a>
          </figure>
          </div>
        ))
      ) : (
        <p>No favorite books added yet.</p>
      )}
    </div>
  );
};

export default FavouriteBooks;

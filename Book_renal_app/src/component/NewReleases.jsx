import React, { useContext, useState } from "react";
import { getAllBooks } from "../data/booksData"; // Ensure this path is correct
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { BookContext } from "../context"; // Ensure this path is correct
import { Add_Task } from "../type/type";
import { toast } from "react-toastify";

function getNewReleases(data) {
    const currentDate = new Date();
    const twoMonthsAgo = new Date(currentDate);
    twoMonthsAgo.setMonth(currentDate.getMonth() - 2);
    
    // Optional: Set the day to the start of the month
    twoMonthsAgo.setDate(1);
  
    console.log('Current Date:', currentDate);
    console.log('Two Months Ago Date:', twoMonthsAgo);
  
    const newReleases = data.filter(book => {
      const createdAt = new Date(book.createdAt);
      
      // Log the parsed date and comparison result
      console.log('Book Title:', book.title);
      console.log('Created At:', createdAt);
      console.log('Is New Release:', createdAt >= twoMonthsAgo);
      
      return createdAt <= twoMonthsAgo;
    });
  
    console.log('Filtered New Releases:', newReleases);
    return newReleases;
}

export default function NewReleases() {
  const data = getAllBooks();
  const [showModel, setShowModel] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { state, dispatch } = useContext(BookContext);

  // Use the getNewReleases function to filter the books
  const books = getNewReleases(data).slice(0, 5); // Only take the first 5 books

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

  const closeSelection = () => {
    setShowModel(false);
    setSelectedBook(null);
  };

  const bookSelection = (book) => {
    setShowModel(true);
    setSelectedBook(book);
  };

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.length === 0 ? (
          <p>No new releases found.</p>
        ) : (
          books.map((book, index) => (
            <div key={index}>
              <figure className="p-4 border w-100 h-[600px] border-black/10 shadow-xl dark:border-white/10 rounded-xl">
                <a href="#">
                  <div className="relative">
                    <button>
                      <CiHeart className="absolute top-[-10px] right-0 h-8 w-8 hover:text-green-500" />
                    </button>
                    <img
                      className="w-[250px] h-[350px] object-cover rounded-lg"
                      src={book.cover}
                      alt={book.title}
                      onClick={() => bookSelection(book)}
                    />
                    <h2 className="text-center font-bold text-xl pt-3 font-poppins tracking-wider mb-1">
                      {book.title}
                    </h2>
                    <p className="text-center text-md text-neutral-400 font-semibold">
                      {book.genre}
                    </p>
                    <div className="flex justify-center mt-2 gap-1">
                      {[...Array(book.rating)].map((_, i) => (
                        <IoStar key={i} className="text-green-400 gap-1" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={(e) => addToCart(e, book)}
                      className="rounded-lg font-bold bg-green-400 px-4 py-2 text-center hover:scale-110 transition-transform duration-300"
                    >
                      {`$${book.price} | Add to cart`}
                    </button>
                  </div>
                </a>
              </figure>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

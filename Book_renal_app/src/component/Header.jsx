import React, { useContext, useState } from "react";
import { PiBookOpenText } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { BookContext, ThemeContext } from "../context";
import { Remove_Task } from "../type/type";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);
  const { state,dispatch } = useContext(BookContext);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeCartItem = (index) => {
    dispatch(
      {
        type: Remove_Task,
        payload: index,
      }
    )
    
  };
  

  return (
    <>
      <header>
        <nav className="container flex items-center justify-between space-x-10">
          <a href="#" className="my-4 flex items-center gap-4">
            <PiBookOpenText className="w-10 h-10" />
            <span className="text-3xl font-bold">Rent&Read</span>
          </a>
          <ul className="flex items-center gap-8">
            <li>
              <a href="#">
                <FaRegBell className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <MdOutlineLightMode className="w-6 h-6" />
                ) : (
                  <MdOutlineDarkMode className="w-6 h-6" />
                )}
              </a>
            </li>
            <li>
              <a href="#" className="relative" onClick={toggleCart}>
                <IoCartOutline className="w-6 h-6" />
                {state.cart.length > 0 && (
                  <span className="bg-green-400 absolute top-[-16px] right-[-6px] flex items-center justify-center font-bold rounded-full w-5 h-5 text-white text-xs">
                    {state.cart.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
        {showCart && (
  <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-sm">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-6 max-h-[90vh] overflow-auto">
      <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl flex flex-col gap-4 p-6 sm:grid sm:grid-cols-1 items-center justify-between overflow-hidden">
        
        {/* Cart Header */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Your Cart
        </h2>

        {/* Cart Items List */}
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700 flex-1 overflow-y-auto">
          {state.cart.length > 0 ? (
            state.cart.map((item, index) => (
              <li key={index} className="py-4 flex justify-center space-x-12 items-center">
                <div className="flex items-center gap-4">
                  <img src={item.cover} alt={item.title} className="w-16 h-16 rounded object-cover" />
                  <div className="flex flex-col">
                    <span className="text-xl font-medium text-gray-900 dark:text-gray-200">{item.title}</span>
                    <span className="text-md text-gray-500 dark:text-gray-400">{item.genre}</span>
                  </div>
                </div>
                
                <div className="flex flex-row gap-4 text-center items-end">
                  <span className="text-xl font-bold text-gray-900 dark:text-gray-200">${item.price}</span>
                  {/* Remove Item Button */}
                  <button
                    className="text-md text-red-500 hover:text-red-700 "
                    onClick={() => removeCartItem(item)}  // Function to remove item from cart
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="py-4 text-center text-gray-500 dark:text-gray-400">Your cart is empty</li>
          )}
        </ul>

        {/* Close Cart Button */}
        <div className="flex justify-center mt-4">
          <button
            className="px-4 text-lg py-1 bg-green-500 text-white font-bold rounded-md hover:bg-green-700 transition duration-200"
            onClick={() => setShowCart(false)}
          >
            Close Cart
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      </header>
    </>
  );
};

export default Header;

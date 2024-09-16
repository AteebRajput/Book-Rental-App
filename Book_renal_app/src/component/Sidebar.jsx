import React from 'react';
import { FaFire, FaFolderPlus, FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <aside>
        <ul className='space-y-2 mt-6'>
        <li>
            <NavLink to="/home">
              <a href='#' className='flex gap-4 rounded-xl items-center px-6 py-3 hover:bg-green-400 group'>
                <IoMdHome className='text-green-600 text-xl group-hover:text-white'/>
                <span className='text-xl text-green-400 group-hover:text-white'>
                  Home
                </span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/trending-books">
              <a href='#' className='flex gap-4 rounded-xl items-center px-6 py-3 hover:bg-green-400 group'>
                <FaFire className='text-green-600 text-xl group-hover:text-white'/>
                <span className='text-xl text-green-400 group-hover:text-white'>
                  Trending
                </span>
              </a>
            </NavLink>
          </li>
          
        
          <li>
            <NavLink to="/favourites">
              <a href='#' className='flex gap-4 rounded-xl items-center px-6 py-3 hover:bg-green-400 group'>
                <FaRegHeart className='text-green-600 text-xl group-hover:text-white'/>
                <span className='text-xl text-green-400 group-hover:text-white'>
                  Favourite
                </span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/watch-later">
              <a href='#' className='flex gap-4 rounded-xl items-center px-6 py-3 hover:bg-green-400 group'>
                <CiClock2 className='text-green-600 text-xl group-hover:text-white'/>
                <span className='text-xl text-green-400 group-hover:text-white'>
                  Watch Later
                </span>
              </a>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;

import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context';
import Header from "./Header.jsx"
import Sidebar from './Sidebar.jsx';
const Main = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`h-full w-full overflow-hidden ${darkMode ? "dark" : ""}`}>
    <Header />
        <main>
          <div className='container grid lg:grid-cols-[218px_1fr] gap-6'>
              <Sidebar />
            <div>
              <div className='min-h-screen'>
              <Outlet />
              
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;

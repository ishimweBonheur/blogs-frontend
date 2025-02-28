import {FaMoon,FaSun} from "react-icons/fa";
import{HiOutlineMenuAlt2} from "react-icons/hi";
import { Link } from "react-router-dom";
import React from 'react'
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar:()=>void;
}

function Header({darkMode ,toggleDarkMode,toggleSidebar}:HeaderProps) {
  
  return (
    <nav className='fixed top-0 z-50 w-full bg-white dark:bg-hover  border-secondary dark:border-gray-700 shadow-lg'>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end ">
            <button onClick={toggleSidebar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary  dark:text-secondary dark:hover:bg-hover dark:focus:ring-secondary">
              <HiOutlineMenuAlt2 className="text-2xl"/>
            </button>
          </div>
          <button className="dark:bg-secondary dark:text-primary rounded full p-2" onClick={toggleDarkMode}>{darkMode?<FaSun/>:<FaMoon/>}</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
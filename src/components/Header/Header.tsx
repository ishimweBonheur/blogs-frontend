import {FaMoon,FaSun} from "react-icons/fa";
import{HiOutlineMenuAlt2} from "react-icons/hi";
import React from 'react'
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar:()=>void;
  sidebarOpen: boolean; 
}

function Header({darkMode ,toggleDarkMode,toggleSidebar,sidebarOpen}:HeaderProps) {
  
  return (
    <nav className={` top-0 z-50 w-full bg-background dark:bg-mini dark:shadow-2xl border-secondary dark:border-gray-700 shadow-lg  ${sidebarOpen? "":""}  `}>
      <div className=" py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end ">
            <button onClick={toggleSidebar} className={`inline-flex p-2 text-sm text-gray-500 rounded-lg  hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary  dark:text-secondary dark:hover:bg-hover dark:focus:ring-secondary  `}>
              <HiOutlineMenuAlt2 className="text-2xl"/>
            </button>
          </div>  
          <button className={`  text-primary hover:text-hover dark:text-secondary rounded full sm:text-base md:text-lg lg:text-xl xl:text-2xl  `} onClick={toggleDarkMode}>{darkMode?<FaSun/>:<FaMoon/>}</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
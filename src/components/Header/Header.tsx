import {FaMoon,FaSun} from "react-icons/fa";
import{HiOutlineMenuAlt2} from "react-icons/hi";
import{MdSpaceDashboard } from "react-icons/md"; 
import { Link } from "react-router-dom";
import React from 'react'
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({darkMode ,toggleDarkMode}:HeaderProps) {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm'>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end ">
            <button>
              <HiOutlineMenuAlt2 className="text-2xl"/>
            </button>
            <Link to="#">
            <MdSpaceDashboard className="h-9 me-3  text-xl text-black"/>
            </Link>
          </div>
          <button onClick={toggleDarkMode}>{darkMode?<FaSun/>:<FaMoon/>}</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
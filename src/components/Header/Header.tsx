import {FaMoon,FaSun} from "react-icons/fa";
import{HiOutlineMenuAlt2} from "react-icons/hi";
import{MdSpaceDashboard } from "react-icons/md"; 
import React from 'react'

function Header() {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm'>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items center justify-center">
          <div className="flex items-center justify-start rtl:justify-end ">
            <button>
              <HiOutlineMenuAlt2/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
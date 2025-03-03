import React from 'react';
import { CiSettings } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { GoSignOut } from "react-icons/go";

interface SideProps {
  isSidebarOpen: boolean;
}
const navigationLinks = [
  {
    name: 'Home',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    name: 'Students',
    path: '/students',
    icon: <HiOutlineUsers />,
  },
  {
    name: 'Teachers & Staff',
    path: '/teachers-staff',
    icon: <LiaChalkboardTeacherSolid />,
  },
  {
    name: 'Finance',
    path: '/financial-resources',
    icon: <TbMoneybag />,
  },
  {
    name: 'Notifications',
    path: '/notifications',
    icon: <GoBell />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <CiSettings />,
  },
  {
    name: 'Logout',
    path: '/logout',
    icon: <GoSignOut />,
  },
];


function Sidebar({ isSidebarOpen }: SideProps) {
  return (
      
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 bg-white border-r shadow border-r shadow-sm dark:bg-hover dark:border-hover transition-transform duration-300 ease-in-out transform ${!isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'}`}
    >
      <div className="h-full px-3 overflow-y-auto pb-4">
        <ul className="space-y-3  font-medium">
          {navigationLinks.map((link) => (
            <li key={link.name} >
              <a
                href={link.path}
                className="flex  items-center space-x-2 text-hover hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-secondary dark:hover:bg-primary px-3 py-2 rounded-lg" >
                <span className=" flex mr-3">{link.icon}</span>
                <span className="">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

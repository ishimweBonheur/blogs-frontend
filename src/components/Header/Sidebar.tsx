import React from 'react';
import { FaHome, FaUsers, FaChalkboardTeacher, FaWallet, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface SideProps {
  isSidebarOpen: boolean;
}
const navigationLinks = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    name: 'Students',
    path: '/students',
    icon: <FaUsers />,
  },
  {
    name: 'Teachers & Staff',
    path: '/teachers-staff',
    icon: <FaChalkboardTeacher />,
  },
  {
    name: 'Financial & Resource Management',
    path: '/financial-resources',
    icon: <FaWallet />,
  },
  {
    name: 'Notifications',
    path: '/notifications',
    icon: <FaBell />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <FaCog />,
  },
  {
    name: 'Logout',
    path: '/logout',
    icon: <FaSignOutAlt />,
  },
];


function Sidebar({ isSidebarOpen }: SideProps) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-primary border-r shadow border-r shadow-sm dark:bg-primary dark:border-hover transition-transform duration-300 ease-in-out transform ${!isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="h-full px-3 overflow-y-auto ">
        <ul className="space-y-3 ">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="flex items-center space-x-2 text-secondary hover:bg-hover px-3 py-2 rounded-md"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

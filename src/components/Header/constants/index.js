import { FaHome, FaUsers, FaChalkboardTeacher, FaWallet, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

export const navigationLinks = [
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

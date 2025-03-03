import React, { useState } from 'react';
import { Navigate, Route, Router, Routes, useLocation } from 'react-router-dom';
import Login from '../components/login&signup';
import SignupForm from '../components/login&signup/SignupForm';
import Header from '../components/Header/Header';
import Sidebar from '../components/Header/Sidebar';

function AppRoutes() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const hideHeaderAndSidebar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={darkMode ? "dark flex" : "flex"}>

      {!hideHeaderAndSidebar && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} sidebarOpen={isSidebarOpen} />}
      {!hideHeaderAndSidebar && <Sidebar isSidebarOpen={isSidebarOpen} />}
      <div className={`transition-all duration-300 flex-1  ${isSidebarOpen ? "w-64 " : "ml-0"}`}>

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignupForm />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default AppRoutes;

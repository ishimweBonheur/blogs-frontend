import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../components/login&signup';
import SignupForm from '../components/login&signup/SignupForm';
import Header from '../components/Header/Header';
import { useState,useEffect } from 'react';
import Sidebar from '../components/Header/Sidebar';

function AppRoutes() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev)=>!prev);
  };
  const hideHeaderAndSidebar = location.pathname === "/login" || location.pathname === "/register";
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarOpen]);
  return (
    <div className={darkMode ? "dark" : ""}>

      {!hideHeaderAndSidebar && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} />    }
      {!hideHeaderAndSidebar&& <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignupForm />} />


      </Routes>
    </div>
  );
}

export default AppRoutes;

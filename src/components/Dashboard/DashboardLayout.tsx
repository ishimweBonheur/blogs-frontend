import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Header/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }:DashboardLayoutProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} sidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className={`flex-1 transition-all duration-300 dark:bg-hover bg-secondary`}>
        <div className={`transition-all duration-300 p-4 mt-14 flex`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Header/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
    <div className="h-screen w-full flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className=" flex w-full flex-col dark:bg-hover">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
          sidebarOpen={isSidebarOpen}
        />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

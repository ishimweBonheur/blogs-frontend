import React, { useState } from "react";
import { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Header/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={darkMode ? "dark flex h-screen" : "flex h-screen"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} sidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "" : "pl-64"}`}>
        <div className="transition-all duration-300 p-2 mt-16">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

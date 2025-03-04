import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/login&signup";
import SignupForm from "../components/login&signup/SignupForm";
import Header from "../components/Header/Header";
import Sidebar from "../components/Header/Sidebar";
import Finance from "../components/finance";
import Notifications from "../components/notifications";
import Settings from "../components/settings";
import Logout from "../components/logout";
import Teachers from "../components/teacher_staff";
import Student from "../components/Students/Student";
import Home from "../components/Home/Home";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupForm />} />

      <Route path="/students" element={
        <DashboardLayout>
          <Student />
        </DashboardLayout>
      }>

      </Route>
      <Route path="/home" element={
        <DashboardLayout>
          <Home />
        </DashboardLayout>
      }>

      </Route>
      <Route
        path="/finance" element={
          <DashboardLayout>
            <Finance />
          </DashboardLayout>} />
      <Route path="/notifications" element={
        <DashboardLayout>
          <Notifications />
        </DashboardLayout>} />
      <Route path="/settings" element={
        <DashboardLayout>
          <Settings />
        </DashboardLayout>} />
      <Route path="/logout" element={
        <DashboardLayout>
          <Logout />
        </DashboardLayout>} />
      <Route path="/teacher_staff" element={
        <DashboardLayout>
          <Teachers />
        </DashboardLayout>} />
    </Routes>
  );
}

export default AppRoutes;

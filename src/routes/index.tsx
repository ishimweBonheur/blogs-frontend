import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/login&signup";
import SignupForm from "../components/login&signup/SignupForm";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Finance from "../components/finance";
import Notifications from "../components/notifications";
import Settings from "../components/settings";
import Logout from "../components/logout";
import Teachers from "../components/teacher_staff";
import Student from "../components/Students/Student";
import Home from "../components/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupForm />} /> 
      <Route path="/students" element={<DashboardLayout><Student /></DashboardLayout>} />
      <Route path="/home" element={<DashboardLayout><Home /></DashboardLayout>} />
      <Route path="/finance" element={<DashboardLayout><Finance /></DashboardLayout>} />
      <Route path="/notifications" element={<DashboardLayout><Notifications /></DashboardLayout>} />
      <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
      <Route path="/logout" element={<DashboardLayout><Logout /></DashboardLayout>} />
      <Route path="/teacher_staff" element={<DashboardLayout><Teachers /></DashboardLayout>} />
    </Routes>
  );
}

export default AppRoutes;

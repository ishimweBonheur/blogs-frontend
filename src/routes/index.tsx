import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/login&signup';
import SignupForm from '../components/login&signup/SignupForm';
import Header from '../components/Header/Header';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
}

export default AppRoutes;

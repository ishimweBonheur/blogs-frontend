import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/login&signup';
import SignupForm from '../components/login&signup/SignupForm';
import Header from '../components/Header/Header';
import { useState } from 'react';

function AppRoutes() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/header" element={<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
    </Routes>
  );
}

export default AppRoutes;

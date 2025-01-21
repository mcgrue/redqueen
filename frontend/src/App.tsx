import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router";
import AboutPage from './pages/about';
import ProfilePage from './pages/profile';
import HomePage from './pages/___home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;

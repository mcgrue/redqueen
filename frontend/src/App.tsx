import React from 'react';

import { Route, Routes } from "react-router";

import MainLayout from './layout/MainLayout';

import AboutPage from './pages/about';
import ProfilePage from './pages/profile';
import HomePage from './pages/___home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';

import { Route, Routes } from "react-router";

import MainLayout from './layout/MainLayout';

import AboutPage from './pages/BoardPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/board" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;

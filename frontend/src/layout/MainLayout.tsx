import React from 'react';
import { Outlet } from 'react-router-dom';

import { Link } from "react-router";


function MainLayout() {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
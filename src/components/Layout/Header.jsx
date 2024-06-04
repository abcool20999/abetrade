// components/Layout/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  return (
    <header>
      <div className="logo">Abetrade</div>
      <nav>
        <ul>
          <li><Link to="/">How it works</Link></li>
          <li><Link to="/myaccounts">My Accounts</Link></li>
          <li><Link to="/getcapital">Get Capital</Link></li>
          {isAuthenticated ? (
            <li><Link to="/logout">Logout</Link></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

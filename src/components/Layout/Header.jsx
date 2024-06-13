// components/Layout/Header.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  return (
    <header className = "list-group list-group-horizontal d-flex justify-content-between border-bottom-2">
      <div className="logo list-group-item border-0">Abetrade</div>
      <nav className='list-group-item border-0'>
        <ul className = "list-group list-group-horizontal">
          <li className='list-group-item border-0 text-black'><Link to="/">How it works</Link></li>
          <li className='list-group-item border-0 text-black'><Link to="/myaccounts">My Accounts</Link></li>
          <li className='list-group-item border-0 text-black'><Link to="/getcapital">Get Capital</Link></li>
          
        </ul>
      </nav>
      <nav>
        <ul className='list-group-item border-0'>
        {isAuthenticated ? (
            <li className='list-group-item border-0'><Link to="/logout">Logout</Link></li>
          ) : (
            <div className='row'>
              <li className='list-group-item border-0 col-4 m-1'><Link to="/login">Login</Link></li>
              <li className='list-group-item border-0 col-8 bg-black text-white border-dark rounded-5'><Link to="/login">Sign Up</Link></li>
            </div>
            
          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;

<<<<<<< HEAD
// components/Layout/Header.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  {      console.log(`isAuthenticated in header is ${isAuthenticated}`)        }

  return (
    
    <header className = "list-group list-group-horizontal d-flex justify-content-between border-bottom-2 mb-4">
      <div className="logo list-group-item border-0 my-auto">Abetrade</div>
      <nav className='list-group-item border-0'>
        <ul className = "list-group list-group-horizontal">
          <li className='list-group-item border-0 text-black'><Link to="/" className='text-black'>How it works</Link></li>
          <li className='list-group-item border-0 text-black'><Link to="/myaccounts" className='text-black'>My Accounts</Link></li>
          <li className='list-group-item border-0 text-black'><Link to="/getcapital" className='text-black'>Get Capital</Link></li>
          
        </ul>
      </nav>
      <nav className='w-25 mx-0 my-auto'>
        <ul className='border-0 m-0'>
        {isAuthenticated ? (
          <div className='row'>
            <li className='col-4 m-1 border-4 rounded-5 border-dark'><Link to="/logout">Logout</Link></li>
            <li className='w-50 border-0 col-8 bg-black text-white border-dark rounded-5'><Link to="/SignUp">Sign Up</Link></li>
          </div>
          ) : (
            <div className='row'>
              <li className='col-4 m-1 border-4 rounded-5 border-dark'><Link to="/login">Login</Link></li>
              <li className='w-50 border-0 col-8 bg-black text-white border-dark rounded-5'><Link to="/SignUp">Sign Up</Link></li>
            </div>
            
          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
=======
// components/Layout/Header.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  return (
    <header className="list-group list-group-horizontal d-flex justify-content-between border-bottom-2">
      <div className="logo list-group-item border-0">Abetrade</div>
      <nav className='list-group-item border-0'>
        <ul className="list-group list-group-horizontal">
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
              <div className='col-4'>
                <li className='list-group-item border-0 m-1'>
                  <Link to="/login">Login</Link>
                </li>
              </div>
              <div className='col-8'>
                <li className='list-group-item border-0 m-1 bg-black text-white border-dark rounded-5'>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </div>
            </div>

          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
>>>>>>> efed4b5 (“trades”)

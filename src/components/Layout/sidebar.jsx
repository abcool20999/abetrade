// components/Layout/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <div className="sidebar-content">
        <ul>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'><Link className='' to="Dashboard">Dashboard</Link></li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'><Link to="/GetCapital">Get Capital</Link></li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'><Link to="MyChallenges">My Challenges</Link></li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'><Link to="MyAccounts">My Accounts</Link></li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'><Link to="myprofile">My Profile</Link></li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'><Link to="support">Support</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

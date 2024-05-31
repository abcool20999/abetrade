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
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/getcapital">Get Capital</Link></li>
          <li><Link to="/mychallenges">My Challenges</Link></li>
          <li><Link to="/myaccounts">My Accounts</Link></li>
          <li><Link to="/myprofile">My Profile</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

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
          <li><Link to="Dashboard">Dashboard</Link></li>
          <li><Link to="GetCapital">Get Capital</Link></li>
          <li><Link to="MyChallenges">My Challenges</Link></li>
          <li><Link to="MyAccounts">My Accounts</Link></li>
          <li><Link to="myprofile">My Profile</Link></li>
          <li><Link to="support">Support</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

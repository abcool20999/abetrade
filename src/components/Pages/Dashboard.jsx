// components/Pages/DashboardPage.js

import React from 'react';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h2>Current Results</h2>
      <div className="section trading-performance">
        <h3>Trading Performance</h3>
        {/* Placeholder for graph showing trading performance */}
      </div>
      <div className="section trading-details">
        <h3>Trading Details</h3>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Start</th>
              <th>End</th>
              <th>Account Size</th>
              <th>Account Type</th>
              <th>Platform</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for trading details */}
          </tbody>
        </table>
      </div>
      <div className="section daily-summary">
        <h3>Daily Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Today's Loss</th>
              <th>Max Permitted Loss</th>
              <th>Daily Drawdown</th>
              <th>Today's Profit</th>
              <th>Last Read Equity</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for daily summary data */}
          </tbody>
        </table>
      </div>
      <div className="section trade-objectives">
        <h3>Trade Objectives to be Achieved</h3>
        <table>
          <thead>
            <tr>
              <th>Objective</th>
              <th>Minimum</th>
              <th>Reached</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for trade objectives */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

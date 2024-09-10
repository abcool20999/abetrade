// components/Pages/MyChallengesPage.js

import React from 'react';
<<<<<<< HEAD
=======
import './MyChallengesPage.css';
>>>>>>> refs/remotes/origin/master

const MyChallenges = () => {
  return (
    <div className="my-challenges-page">
      <h2>My Challenges</h2>
      <table className="challenges-table">
        <thead>
          <tr>
            <th>Challenge Account</th>
            <th>Balance</th>
            <th>Challenge Started</th>
            <th>Result</th>
            <th>Logo</th>
            <th>Login Credentials</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beginners Challenge Account</td>
            <td>CA$500</td>
            <td>Not yet</td>
            <td>Ongoing</td>
            <td>Logo Here</td>
            <td>Login Credentials</td>
          </tr>
          {/* Add more rows for additional challenges */}
        </tbody>
      </table>
    </div>
  );
};

export default MyChallenges;

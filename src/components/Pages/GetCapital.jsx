// components/Pages/GetCapitalPage.js

import React from 'react';

const GetCapitalPage = () => {
  return (
    <div className="get-capital-page">
      <h2>Get Capital</h2>
      <div className="subscription-cards">
        <div className="subscription-card">
          <h3>CA$500</h3>
          <p>Evaluation account</p>
          <p>Beginner</p>
          <hr />
          <ul>
            <li><span className="check-mark">&#x2713;</span> Zero Minimum Trading days</li>
            <li><span className="check-mark">&#x2713;</span> Immediate Payout</li>
            <li><span className="check-mark">&#x2713;</span> Profit Share 90%</li>
            <li><span className="check-mark">&#x2713;</span> 20 Days per Challenge</li>
            <li><span className="check-mark">&#x2713;</span> 10 Days per Verification</li>
          </ul>
          <button>Get Capital</button>
        </div>
        <div className="subscription-card">
          <h3>CA$1,000</h3>
          <p>Intermediate account</p>
          <p>Intermediate</p>
          <hr />
          <ul>
            <li><span className="check-mark">&#x2713;</span> Zero Minimum Trading days</li>
            <li><span className="check-mark">&#x2713;</span> Immediate Payout</li>
            <li><span className="check-mark">&#x2713;</span> Profit Share 90%</li>
            <li><span className="check-mark">&#x2713;</span> 20 Days per Challenge</li>
            <li><span className="check-mark">&#x2713;</span> 10 Days per Verification</li>
          </ul>
          <button>Get Capital</button>
        </div>
        <div className="subscription-card">
          <h3>CA$2,000</h3>
          <p>Expert account</p>
          <p>Expert</p>
          <hr />
          <ul>
            <li><span className="check-mark">&#x2713;</span> Zero Minimum Trading days</li>
            <li><span className="check-mark">&#x2713;</span> Immediate Payout</li>
            <li><span className="check-mark">&#x2713;</span> Profit Share 90%</li>
            <li><span className="check-mark">&#x2713;</span> 20 Days per Challenge</li>
            <li><span className="check-mark">&#x2713;</span> 10 Days per Verification</li>
          </ul>
          <button>Get Capital</button>
        </div>
      </div>
    </div>
  );
};

export default GetCapital;

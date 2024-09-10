import React from 'react';

<<<<<<< HEAD
const CapitalClass = () => {
  return (
    <div className="get-capital">
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
          <a className='btn bg-dark text-white' href='/GetCapitalConfirm'>Get Capital</a>
        </div>
    </div>
    </div>)
}
=======
const CapitalClass = ({ amount, description, level, daysChallenge, daysVerification, profitShare }) => {
  return (
    <div className="subscription-card">
      <h3>{amount}</h3>
      <p>{description}</p>
      <p>{level}</p>
      <hr />
      <ul>
        <li><span className="check-mark">&#x2713;</span> Zero Minimum Trading days</li>
        <li><span className="check-mark">&#x2713;</span> Immediate Payout</li>
        <li><span className="check-mark">&#x2713;</span> Profit Share {profitShare}</li>
        <li><span className="check-mark">&#x2713;</span> {daysChallenge} Days per Challenge</li>
        <li><span className="check-mark">&#x2713;</span> {daysVerification} Days per Verification</li>
      </ul>
      <a className='btn bg-dark text-white' href='/GetCapitalConfirm'>Get Capital</a>
    </div>
  );
}

>>>>>>> refs/remotes/origin/master
export default CapitalClass;
import React from 'react';

const DailySummary = () => {
    return (
        <div className="my-5 border-dark">
          <h6 className='text-start'>Daily Summary</h6>
          <table className='table'>
            <thead>
              <tr>
                <th><small>Today's Loss</small></th>
                <th><small>Max Permitted Loss</small></th>
                <th><small>Daily Drawdown</small></th>
                <th><small>Today's Profit</small></th>
                <th><small>Last Read Equity</small></th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for daily summary data */}
            </tbody>
          </table>
        </div>
)};


export default DailySummary;
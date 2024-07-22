// components/Layout/Footer.js

import React, {useEffect, useState} from 'react';

const Symbols = () => {

  return (
    <div className='col'>
      <div className='row'>
        <div className='col-2'>All</div>
        <div className='col-2'>Metals</div>
        <div className='col-2'>Coins</div>
        <div className='col-2'>Orders</div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Trading Pair</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AAPL</td>
            <td>1.9876</td>
          </tr>
          <tr>
            <td>GOOG</td>
            <td>1.9876</td>
          </tr>
          <tr>
            <td>MSF</td>
            <td>1.9876</td>
          </tr>
          <tr>
            <td>FRD</td>
            <td>1.9876</td>
          </tr>
          <tr>
            <td>ZSE</td>
            <td>1.9876</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Symbols;

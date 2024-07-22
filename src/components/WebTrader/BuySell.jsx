// components/Layout/Footer.js

import React, {useEffect, useState} from 'react';

const BuySell = () => {

  return (
    <div className='col px-4 my-4'>
      <div className='row'>
        <div className='col-3'>Spot Trading</div>
        <div className='col-3'>Available Balance <span><b>500USD</b></span></div>
      </div>

      <div className='row'>
        <div className='col-3'>
          <div className='row'>
            <div className='col-2'>Price</div>
            <div className='col-2'>1.98067</div>
          </div>
          <div>
            <div className='col-2'>Value</div>
            <div className='col-2'>1.0000</div>
          </div>
        </div>
        <div className='col-3'>
          <div className='row'>
            <div className='col-2'>Price</div>
            <div className='col-2'>1.98067</div>
          </div>
          <div>
            <div className='col-2'>Value</div>
            <div className='col-2'>1.0000</div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='btn btn-success col-3'>
          Buy
        </div>
        <div className='btn col-3 border-success text-success'>
          Sell
        </div>
      </div>
    </div>
  );
};

export default BuySell;

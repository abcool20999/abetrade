// components/Layout/Footer.js

import React, {useEffect, useState, useContext} from 'react';
import { WebTraderContext } from './WebTraderContext';
import axios from 'axios'

const BuySell = () => {
  const { symbolInfo } = useContext(WebTraderContext);
  useEffect(()=>{
    console.log('symbol info ', symbolInfo)
  },[symbolInfo])
  function buy(){
    placeOrder('buy')
  }
  function sell(){
    placeOrder('sell')
  }
  function placeOrder(flag){
    let price
    let value
    let symbol = document.getElementById('symbol')
    switch (flag) {
      case 'buy':
        price = symbolInfo.buyPrice
        value = symbolInfo.buyValue
        // price = document.getElementById('buyprice')
        // value = document.getElementById('buyvalue')
        break;
    
      case 'sell':
        price = symbolInfo.sellPrice
        value = symbolInfo.sellValue
        // price = document.getElementById('sellprice')
        // value = document.getElementById('sellvalue')
        break;

      default:
        break;
    }
    let body = {
      'symbol': symbolInfo.symbol,
      'side': flag,
      'price': price,
      'qty': value,
      'flag': flag
    }
    const token = localStorage.getItem("propAuthToken");

    let config = {
      method: 'post',
      // maxBodyLength: Infinity,
      // url: 'http://localhost:5000/api/auth/login',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      data: body
    };

    axios('http://localhost:5001/api/order/place_order', config)
    .then((response) => {
      console.log(JSON.stringify(response.data));

      // let token = response.data.user.token
      // if(token) {
      //   localStorage.setItem('propAuthToken', JSON.stringify({ token})); 
      //   // const navigate = useNavigate();
      //   // navigate('/Dashboard');
      //   setLoginSuccessful(true)
      // }

    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='col px-4 my-4'>
      <div>{symbolInfo.symbol}</div>
      <div className='row'>
        <div className='col-4'>Spot Trading</div>
        <div className='col-8' style={{"margin-left": '-50px'}}><span>Available Balance </span><span><b>500USD</b></span></div>
      </div>

      <div className='row'>
        <div className='col-4'>
          <div className='row'>
            <div className='col-4'>Price</div>
            <div className='col-4' id='buyprice'>{symbolInfo.buyPrice}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Value</div>
            <div className='col-4' id='buyvalue'>{symbolInfo.buyValue}</div>
          </div>
        </div>
        <div className='col-8'>
          <div className='row ms-2'>
            <div className='col-4'>Price</div>
            <div className='col-4' id='sellprice'>{symbolInfo.sellPrice}</div>
          </div>
          <div className='row ms-2' >
            <div className='col-4'>Value</div>
            <div className='col-4' id='sellvalue'>{symbolInfo.sellValue}</div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div onClick = {buy} className='btn btn-success col-4'>
          Buy
        </div>
        <div onClick = {sell} className='btn col-4 ms-5 border-success text-success'>
          Sell
        </div>
      </div>
    </div>
  );
};

export default BuySell;

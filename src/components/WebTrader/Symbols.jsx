// components/Layout/Footer.js

import React, {useEffect, useState, useContext} from 'react';
import { WebTraderContext } from './WebTraderContext';
<<<<<<< HEAD
import axios from 'axios'
import appConfig from '../../../app-config';
const Symbols = () => {
  const {interval, symbolInfo, setSymbolInfo, setCandleStickData } = useContext(WebTraderContext);

  useEffect(()=>{
    var startDate = new Date(2022,8,4, 15, 30, 0 )
    startDate = encodeURIComponent(startDate.toISOString());
    var endDate = new Date(Date.now())
    endDate.setDate(endDate.getDate() - 1);
    endDate =encodeURIComponent(endDate.toISOString());
    const options = {
      method: 'GET',
      url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbolInfo.symbol}&timeframe=${interval || '1Min'}&start=${startDate}&end=${endDate}&limit=100&adjustment=raw&feed=sip&sort=asc`,
      // url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbolInfo.symbol}&timeframe=${interval || '1Min'}&start=2022-01-03T00%3A00%3A00Z&end=2022-05-04T00%3A00%3A00Z&limit=100&adjustment=raw&feed=sip&sort=asc`,
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': appConfig['APCA-API-KEY-ID'],
        'APCA-API-SECRET-KEY': appConfig['APCA-API-SECRET-KEY']
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if(!(symbolInfo.symbol)) return
        let arrayResult = response.data.bars[symbolInfo.symbol]
        let length = arrayResult.length
        let price = arrayResult[length-1]['vw']
          //setSymbolInfo({symbol: symbolInfo.symbol, buyPrice: price, buyValue: 1.0000, sellPrice: price, sellValue: 1.0000})
        let candleStickData = arrayResult.map((tick)=>{
          // let formattedDate = formatDate(tick.t)
          // let time = extractTime(tick.t)
        return {
          time: Date.parse(tick.t)/1000, open: tick.o, high: tick.h, low: tick.l, close: tick.c
        }
      })
      setSymbolInfo((currentState)=> {
        currentState = {symbol: symbolInfo.symbol, buyPrice: price * symbolInfo.buyValue, buyValue: symbolInfo.buyValue, buyPricePerShare: price, sellPrice: price * symbolInfo.sellValue, sellValue: symbolInfo.sellValue, sellPricePerShare: price}
        return currentState
      })
      setCandleStickData(candleStickData)
      console.log(candleStickData)
      })
      .catch(function (error) {
        console.error(error);
      });
  },[])

  function setSymbol(symbol){
    var startDate = new Date(2022,8,4, 15, 30, 0 )
    startDate = encodeURIComponent(startDate.toISOString());
    var endDate = new Date(Date.now())
    endDate.setDate(endDate.getDate() - 1);
    endDate =encodeURIComponent(endDate.toISOString());
    const options = {
      method: 'GET',
      url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbol}&timeframe=${interval || '1Min'}&start=${startDate}&end=${endDate}&limit=100&adjustment=raw&feed=sip&sort=asc`,
      // url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbol}&timeframe=${interval || '1Min'}&start=2022-01-03T00%3A00%3A00Z&end=2022-05-04T00%3A00%3A00Z&limit=100&adjustment=raw&feed=sip&sort=asc`,
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': 'PK1TBMOBMDHONGMRGIF6',
        'APCA-API-SECRET-KEY': 'Ghvq8PWfZQLH9ylxzAdG1LgIwQfahUOdgknxPVXp'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if(!(symbol)) return
        let arrayResult = response.data.bars[symbol]
        let length = arrayResult.length
        let price = arrayResult[length-1]['vw']
          //setSymbolInfo({symbol: symbolInfo.symbol, buyPrice: price, buyValue: 1.0000, sellPrice: price, sellValue: 1.0000})
        let candleStickData = arrayResult.map((tick)=>{
          // let formattedDate = formatDate(tick.t)
          // let time = extractTime(tick.t)
        return {
          time: Date.parse(tick.t)/1000, open: tick.o, high: tick.h, low: tick.l, close: tick.c
        }
      })
      setSymbolInfo((currentState)=> {
        currentState = {symbol: symbol, buyPrice: price * symbolInfo.buyValue, buyValue: symbolInfo.buyValue, buyPricePerShare: price, sellPrice: price * symbolInfo.sellValue, sellValue: symbolInfo.sellValue, sellPricePerShare: price}
        return currentState
      })
      setCandleStickData(candleStickData)
      console.log(candleStickData)
      })
      .catch(function (error) {
        console.error(error);
      });

  }
=======
const Symbols = () => {
  const { setSymbolInfo } = useContext(WebTraderContext);
>>>>>>> refs/remotes/origin/master
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
<<<<<<< HEAD
          <tr onClick={() => setSymbol('AAPL') }>
            <td>AAPL</td>
            <td>1.9876</td>
          </tr>
          <tr onClick={() => setSymbol('GOOG') }>
            <td class='symbol'>GOOG</td>
            <td>1.9876</td>
          </tr>
          <tr onClick={() => setSymbol('MSFT') }>
            <td class='symbol'>MSFT</td>
            <td>1.8876</td>
          </tr>
          <tr onClick={() => setSymbol('FRD') }>
            <td class='symbol'>FRD</td>
            <td>1.7876</td>
          </tr>
          <tr onClick={() => setSymbol('ZSE') }>
=======
          <tr>
            <td>AAPL</td>
            <td>1.9876</td>
          </tr>
          <tr onClick={() => setSymbolInfo({symbol: 'GOOG', buyPrice: 1.9876, buyValue: 1.0000, sellPrice: 1.9876, sellValue: 1.0000})}>
            <td class='symbol'>GOOG</td>
            <td>1.9876</td>
          </tr>
          <tr onClick={() => setSymbolInfo({symbol: 'MSF', buyPrice: 1.8876, buyValue: 1.0000, sellPrice: 1.8876, sellValue: 1.0000})}>
            <td class='symbol'>MSF</td>
            <td>1.8876</td>
          </tr>
          <tr onClick={() => setSymbolInfo({symbol: 'FRD', buyPrice: 1.7876, buyValue: 1.0000, sellPrice: 1.7876, sellValue: 1.0000})}>
            <td class='symbol'>FRD</td>
            <td>1.7876</td>
          </tr>
          <tr onClick={() => setSymbolInfo({symbol: 'ZSE', buyPrice: 1.6876, buyValue: 1.0000, sellPrice: 1.6876, sellValue: 1.0000})}>
>>>>>>> refs/remotes/origin/master
            <td class='symbol'>ZSE</td>
            <td>1.6876</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Symbols;

// components/Layout/Footer.js

import React, {useEffect, useState, useContext} from 'react';
import { WebTraderContext } from './WebTraderContext';
const Symbols = () => {
  const { setSymbolInfo } = useContext(WebTraderContext);
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
            <td class='symbol'>ZSE</td>
            <td>1.6876</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Symbols;

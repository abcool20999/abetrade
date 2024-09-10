<<<<<<< HEAD
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
=======
import React, { createContext, useState } from 'react';

>>>>>>> refs/remotes/origin/master
const WebTraderContext = createContext();

const WebTraderContextProvider = ({ children }) => {
  const [interval, setInterval] = useState('1Min');
  const [symbolInfo, setSymbolInfo] = useState({
    symbol: 'GOOG', 
    buyPrice: 1.9876, buyValue: 1.0000,
<<<<<<< HEAD
    buyPricePerShare: 1.9876, buyValuePerShare: 1.0000,
    sellPrice: 1.9876, sellValue: 1.0000
  });
  const [candleStickData, setCandleStickData] = useState([]);

  return (
    <WebTraderContext.Provider value={{ interval, setInterval, symbolInfo, setSymbolInfo, candleStickData, setCandleStickData }}>
=======
    sellPrice: 1.9876, sellValue: 1.0000,
  });

  return (
    <WebTraderContext.Provider value={{ interval, setInterval, symbolInfo, setSymbolInfo }}>
>>>>>>> refs/remotes/origin/master
      {children}
    </WebTraderContext.Provider>
  );
};

export { WebTraderContext, WebTraderContextProvider };

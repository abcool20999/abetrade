import React, { createContext, useState } from 'react';

const WebTraderContext = createContext();

const WebTraderContextProvider = ({ children }) => {
  const [interval, setInterval] = useState('1Min');
  const [symbolInfo, setSymbolInfo] = useState({
    symbol: 'GOOG', 
    buyPrice: 1.9876, buyValue: 1.0000,
    sellPrice: 1.9876, sellValue: 1.0000,
  });

  return (
    <WebTraderContext.Provider value={{ interval, setInterval, symbolInfo, setSymbolInfo }}>
      {children}
    </WebTraderContext.Provider>
  );
};

export { WebTraderContext, WebTraderContextProvider };

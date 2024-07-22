import React, { createContext, useState } from 'react';

const WebTraderContext = createContext();

const WebTraderContextProvider = ({ children }) => {
  const [interval, setInterval] = useState('1Min');

  return (
    <WebTraderContext.Provider value={{ interval, setInterval }}>
      {children}
    </WebTraderContext.Provider>
  );
};

export { WebTraderContext, WebTraderContextProvider };

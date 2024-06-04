// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/sidebar';
import Footer from './components/Layout/Footer';
//import HomePage from './components/Pages/HomePage';

import GetCapital from './components/Pages/GetCapital';
import Login from './components/Pages/Login';
import MyChallenges from './components/Pages/MyChallenges';
import Dashboard from './components/Pages/Dashboard';
//import NotFoundPage from './components/Pages/NotFoundPage';

const App = () => {
  return (
    
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/GetCapital" element={GetCapital} />
            <Route path="/Login" element={Login} />
            <Route path="/MyChallenges" element={MyChallenges} />
            <Route path='/Dashboard' element={Dashboard} />
          </Routes>
          </div>
        <Footer />
      </div>
    
  );
};

export default App;


// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Header from './components/Layout/Header';
//import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
//import HomePage from './components/Pages/HomePage';

import GetCapital from './components/Pages/GetCapital';
import Login from './components/Pages/Login';
import MyChallenges from './components/Pages/MyChallenges';
import Dashboard from './components/Pages/Dashboard';
//import NotFoundPage from './components/Pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Switch>

            <Route path="/getcapital" component={GetCapital} />
            <Route path="/login" component={Login} />
            <Route path="/mychallenges" component={MyChallenges} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


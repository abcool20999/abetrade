// App.jsx

import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './components/Pages/HomePage/Hompage'
import Sidebar from './components/Layout/sidebar';
import Footer from './components/Layout/Footer/Footer';
//import HomePage from './components/Pages/HomePage';
import GetCapitalSuccess from './components/Pages/GetCapitalSuccess/GetCapitalSuccess';
import GetCapitalConfirm from './components/Pages/GetCapitalConfirm/GetCapitalConfirm';
import GetCapital from './components/Pages/GetCapital/GetCapital';
import Login from './components/Pages/Login';
import Logout from './components/Pages/Auth/Logout'
import Register from './components/Pages/Register';
import MyChallenges from './components/Pages/MyChallenges';
import Dashboard from './components/Pages/DashBoard/Dashboard';
import WebTrader from './components/WebTrader/WebTrader'
import AuthProvider, {AuthIsNotSignedIn, AuthIsSignedIn} from "./components/Pages/Auth/AuthProvider";
//import NotFoundPage from './components/Pages/NotFoundPage';

// const App = () => {
//   return (
    
//       <div className="app w-100 container-lg bg-black bg-opacity-50">
//         <Header />
//         <div className="main-content bg-danger row">
//           <div className='col-4'>
//             <Sidebar />
//           </div>
//           <div className='col-8'>
//             <Routes>
//               <Route path="/GetCapital" element={<GetCapital/>} />
//               <Route path="/Login" element={<Login/>} />
//               <Route path="/MyChallenges" element={<MyChallenges/>} />
//               <Route path='/Dashboard' element={<Dashboard/>} />
//               <Route path="/myaccounts" element={<Login/>} />
//               <Route path="/getcapital" element={<MyChallenges/>} />
//               <Route path='/myprofile' element={<Dashboard/>} />
//             </Routes>
//           </div>
//           </div>
//         <Footer />
//       </div>
    
//   );
// };


const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    
      <div className="app w-100 container-lg">
        <Header />
          <div className="main-content bg-light">  
            {/* <HomePage/> */}
            <div className=''>
            <AuthProvider>
              <AuthIsSignedIn>
                  <Routes>
                    <Route path={"/logout"} element={<Logout />} />
                    {/* <Route path={"/protected"} element={<Protected />} /> */}
                    <Route path='/' element={user?.email ? <Dashboard user={user} /> : <HomePage />}
                    // element={<HomePage/>} 
                    />
                    <Route path="/GetCapital" element={<GetCapital/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/MyChallenges" element={<MyChallenges/>} />
                    <Route path='/Dashboard' element={<Dashboard/>} />
                    <Route path="/myaccounts" element={<Navigate to="/Dashboard"/>} />
                    <Route path='/myprofile' element={<Dashboard/>} />
                    <Route path='/SignUp' element={<Register/>} />
                    <Route path='/WebTrader' element={<WebTrader/>} />
                  </Routes>
              </AuthIsSignedIn>

              <AuthIsNotSignedIn>
                  <Routes>
                    <Route path={"/login"} element={<Login />} />
                    {/* <Route path={"/unprotected"} element={<Unprotected />} /> */}
                    <Route path="/*" element={<Navigate replace to={"/login"} />} />
                  </Routes>
              </AuthIsNotSignedIn>
            </AuthProvider>

              {/* <Routes>
                <Route path='/' element={user?.email ? <Dashboard user={user} /> : <HomePage />}
                // element={<HomePage/>} 
                />
                <Route path="/GetCapital" element={<GetCapital/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/MyChallenges" element={<MyChallenges/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path="/myaccounts" element={<Navigate to="/Dashboard"/>} />
                <Route path='/myprofile' element={<Dashboard/>} />
                <Route path='/SignUp' element={<Register/>} />
                <Route path='/WebTrader' element={<WebTrader/>} />
              </Routes> */}
            </div>
          </div>
        <Footer />
      </div>
    
  );
};
export default App;


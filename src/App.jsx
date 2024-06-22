// App.jsx

import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './components/Pages/HomePage/Hompage'
import Sidebar from './components/Layout/sidebar';
import Footer from './components/Layout/Footer';
//import HomePage from './components/Pages/HomePage';

import GetCapital from './components/Pages/GetCapital';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import MyChallenges from './components/Pages/MyChallenges';
import Dashboard from './components/Pages/DashBoard/Dashboard';
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
              <Routes>
                <Route path='/' element={user?.email ? <Dashboard user={user} /> : <HomePage />}
                // element={<HomePage/>} 
                />
                <Route path="/GetCapital" element={<GetCapital/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/MyChallenges" element={<MyChallenges/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path="/myaccounts" element={<Navigate to="/Dashboard"/>} />
                <Route path="/getcapital" element={<MyChallenges/>} />
                <Route path='/myprofile' element={<Dashboard/>} />
                <Route path='/SignUp' element={<Register/>} />

              </Routes>
            </div>
          </div>
        <Footer />
      </div>
    
  );
};
export default App;


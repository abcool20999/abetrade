// components/Pages/Dashboard.js

<<<<<<< HEAD
import React, {useState, useContext, useEffect} from 'react';
=======
import React from 'react';
>>>>>>> refs/remotes/origin/master
import Sidebar from '../../Layout/sidebar';
import CurrentResults from './CurrentResults';
import Status from './Status';
import DailySummary from './DailySummary';
import Objectives from './Objectives';
<<<<<<< HEAD
import { AuthContext } from '../Auth/AuthProvider';
import axios from 'axios'
import appConfig from '../../../../app-config';
import { DashBoardContextProvider } from './DashBoardContext';
const Dashboard = () => {

  const [orders, setOrders] = useState([])
  const { signIn, getAuthToken } = useContext(AuthContext);
  useEffect(()=>{
      async function getOrders(){
          try {
              let token = getAuthToken()
              if(!token){
                   console.log("token not found")
              }
              else{
                  let config = {
                      method: 'get',
                      // maxBodyLength: Infinity,
                      // url: 'http://localhost:5000/api/auth/login',
                      headers: { 
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'authorization': `Bearer ${token}`
                      }
                      };
                  
                      var response = await axios(`${appConfig.BACKEND_BASE_URL}/api/order/get_orders`, config)
                      let data = response.data
                      if(data.data){
                      setOrders(data.data)
                      //return data
                      }
              }
            } catch (error) {
              console.log(error)
              //return null
            }
          }

      getOrders()
  }, [])

  return (
    <DashBoardContextProvider>
      <div className="dashboard row">
        <div className='col-2'>
          <Sidebar></Sidebar>
        </div>
        <div className='col col-10'>
          <div className='row'>
            <div className='col-8'><CurrentResults /></div>
            <div className='col-4'><Status /></div>
          </div>
          <div className=''>
            <DailySummary/>
            <Objectives/>
          </div>
        </div>
      </div>
    </DashBoardContextProvider>
=======
// const Dashboard = () => {
//   return (
//     <div className="dashboard row">
//       <div className='col-4'>
//         <Sidebar></Sidebar>
//       </div>
//       <div className='col-8'>
//         <h2>Current Results</h2>
//         <div className="section trading-performance">
//           <h3>Trading Performance</h3>
//           {/* Placeholder for graph showing trading performance */}
//         </div>
//         <div className="section trading-details">
//           <h3>Trading Details</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Status</th>
//                 <th>Start</th>
//                 <th>End</th>
//                 <th>Account Size</th>
//                 <th>Account Type</th>
//                 <th>Platform</th>
//                 <th>Last Updated</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Placeholder for trading details */}
//             </tbody>
//           </table>
//         </div>
//         <div className="section daily-summary">
//           <h3>Daily Summary</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Today's Loss</th>
//                 <th>Max Permitted Loss</th>
//                 <th>Daily Drawdown</th>
//                 <th>Today's Profit</th>
//                 <th>Last Read Equity</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Placeholder for daily summary data */}
//             </tbody>
//           </table>
//         </div>
//         <div className="section trade-objectives">
//           <h3>Trade Objectives to be Achieved</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Objective</th>
//                 <th>Minimum</th>
//                 <th>Reached</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Placeholder for trade objectives */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard = () => {
  return (
    <div className="dashboard row">
      <div className='col-4'>
        <Sidebar></Sidebar>
      </div>
      <div className='col col-8'>
        <div className='row'>
          <div className='col-6'><CurrentResults /></div>
          <div className='col-6'><Status /></div>
        </div>
        <div className=''>
          <DailySummary/>
          <Objectives/>
        </div>
      </div>
    </div>
>>>>>>> refs/remotes/origin/master
  );
};

export default Dashboard;

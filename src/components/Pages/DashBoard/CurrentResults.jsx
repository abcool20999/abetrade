import React, {useEffect, useState, useContext} from 'react';
import appConfig from '../../../../app-config';
import axios from 'axios'
import { AuthContext } from '../Auth/AuthProvider';
import { DashBoardContext } from './DashBoardContext';
const CurrentResults = () => {
    // const [orders, setOrders] = useState([])
    const {  getAuthToken } = useContext(AuthContext);
    const { orders, setOrders, positions, setPositions } = useContext(DashBoardContext);

    useEffect(()=>{
        // async function getOrders(){
        //     try {
        //         let token = getAuthToken()
        //         if(!token){
        //              console.log("token not found")
        //         }
        //         else{
        //             let config = {
        //                 method: 'get',
        //                 // maxBodyLength: Infinity,
        //                 // url: 'http://localhost:5000/api/auth/login',
        //                 headers: { 
        //                     'Accept': 'application/json',
        //                     'Content-Type': 'application/json',
        //                     'authorization': `Bearer ${token}`
        //                 }
        //                 };
                    
        //                 var response = await axios(`${appConfig.BACKEND_BASE_URL}/api/order/get_orders`, config)
        //                 let data = response.data
        //                 if(data.data){
        //                 setOrders(data.data)
        //                 //return data
        //                 }
        //         }
        //       } catch (error) {
        //         console.log(error)
        //         //return null
        //       }
        //     }

        // getOrders()
    
    }, [orders, setOrders, positions, setPositions])

    return (
        <div className='row m-3 border-2 border-black'>
            <div className=''>
                <h4>Current Results</h4>
            </div>
            <div className=''>
                {!orders?<div>No data to show yet...start trading to start tracking results</div>:
                                <table>
                                <thead>
                                    <tr>
                                        <td>OrderId</td>
                                        <td>Side</td>
                                        <td>Symbol</td>
                                        <td>Qty</td>
                                        <td>FilledQty</td>
                                        <td>Status</td>
                                        <td>SubmittedAt</td>
                                        <td>Filled Average Price</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {orders.map((order, index) => (
                                    // Use index or a unique identifier as key
                                    <tr key={index}>
                                        {/* <td>{order.id}</td> */}
                                        <td>{++index}</td>
                                        <td>{order.side}</td>
                                        <td>{order.symbol}</td>
                                        <td>{order.qty}</td>
                                        <td>{order.filled_qty}</td>
                                        <td>{order.status}</td>
                                        <td>{order.submitted_at}</td>
                                        <td>{order.filled_avg_price}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
            
                }
                
            </div>
        </div>
    )};


export default CurrentResults;
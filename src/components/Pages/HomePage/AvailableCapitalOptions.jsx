import React from 'react';

// const AvailableCapitalOptions = () => {
//     return (
//         <div>
//             <h2 className='m-4'>Available Capital Options</h2>
//             <nav aria-label="Available Capital Options">
//                 <ul className="pagination">
//                     <li className="page-item">
//                         <a className="page-link" href="#" aria-label="Previous">
//                             <span aria-hidden="true">&laquo;</span>
//                         </a>
//                     </li>
//                     <li className="page-item bg-white">
//                         <div className='h-75'>
//                             <h5 className="page-link bg-white border-0" href="#">
//                                 Bitcoin
//                             </h5>
//                             <p>
//                                 Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
//                             </p>
//                         </div>
//                         <div className="row">
//                             <h5 className="col-6">CA$2000</h5>
//                             <button className="w-50 col-4 bg-black text-white">Get Funded</button>
//                         </div>
//                     </li>
//                     <li className="page-item bg-white">
//                     <div className='h-75'>
//                         <h5 className="page-link bg-white border-0" href="#">
//                             Bitcoin
//                         </h5>
//                         <p className="">
//                             Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
//                         </p>
//                     </div>
//                     <div className="row">
//                         <h5 className="col-6">CA$2000</h5>
//                         <button className="col-6 bg-black text-white">Get Funded</button>
//                     </div>
//                     </li>
//                     <li className="page-item bg-white">
//                         <div className='h-75'>
//                             <h5 className="page-link bg-white border-0" href="#">
//                                 Bitcoin
//                             </h5>
//                             <p className="">
//                                 Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
//                             </p>
//                         </div>
//                         <div className="row">
//                             <h5 className="col-6">CA$2000</h5>
//                             <button className="col-6 bg-black text-white">Get Funded</button>
//                         </div>
//                     </li>
//                     <li className="page-item">
//                     <a className="page-link" href="#" aria-label="Next">
//                         <span aria-hidden="true">&raquo;</span>
//                     </a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )}

const AvailableCapitalOptions = () => {
    return (
        <div>
            <h2 className='m-4'>Available Capital Options</h2>
            <nav aria-label="Available Capital Options">
                <ul className="row">
                    <li className="col-1 align-content-center">
                        <a className="" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="capoptionslist bg-white col-3 m-2">
                        <div className='h-75'>
                            <h5 className="bg-white border-0" href="#">
                                Bitcoin
                            </h5>
                            <p>
                                Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="col-6">CA$2000</h5>
                            <button className="w-50 col-4 bg-black text-white rounded-5">Get Funded</button>
                        </div>
                    </li>
                    <li className="capoptionslist bg-white col-3 m-2">
                    <div className='h-75'>
                        <h5 className="bg-white border-0" href="#">
                            Bitcoin
                        </h5>
                        <p className="">
                            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
                        </p>
                    </div>
                    <div className="row">
                        <h5 className="col-6">CA$2000</h5>
                        <button className="col-6 bg-black text-white rounded-5">Get Funded</button>
                    </div>
                    </li>
                    <li className="capoptionslist bg-white col-3 m-2">
                        <div className='h-75'>
                            <h5 className="bg-white border-0" href="#">
                                Bitcoin
                            </h5>
                            <p className="">
                                Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="col-6">CA$2000</h5>
                            <button className="col-6 bg-black text-white rounded-5">Get Funded</button>
                        </div>
                    </li>
                    <li className="col-1 align-content-center">
                    <a className="" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    )}

    
export default AvailableCapitalOptions
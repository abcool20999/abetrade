// components/Pages/GetCapitalPage.js
import Sidebar from '../../Layout/sidebar';
import React from 'react';
import CapitalClass from './CapitalClass';

const GetCapital = () => {
  return (
    <div className=" row">
      <div className='col-4'>
        <Sidebar></Sidebar>
      </div>
      <div className='row col-8'>
        <div className='col-3'><CapitalClass /></div>
        <div className='col-3'><CapitalClass /></div>
        <div className='col-4'><CapitalClass /></div>
        
      </div> 
    </div>
  );
};

export default GetCapital;



<div>

</div>
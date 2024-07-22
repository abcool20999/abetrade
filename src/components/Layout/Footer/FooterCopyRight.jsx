// components/Layout/Footer.js

import React from 'react';

const FooterCopyRight = () => {
  return (
    <div className='row'>
      <p className='col-4'>Prop Firm Name &copy; {new Date().getFullYear()} All Rights Reserved</p>
      <div className='row col-8'>
        <div className='col-4'>Eleven</div>
        <div className='col-4'>Twelve</div>
        <div className='col-4'>Thirteen</div>
      </div>
    </div>
  );
};

export default FooterCopyRight;

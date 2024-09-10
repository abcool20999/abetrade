// components/Layout/Footer.js

import React from 'react';

const FooterTop = () => {
  return (
    <div>
      <div className="footer-top row justify-content-between">
        <div className="footer-left col-4">
          <img src="/path/to/propfirm-logo.png" alt="Prop Firm Logo" />
          <span>Prop Firm Name</span>
        </div>
        <form className="footer-right row col-8">
          <input type="email" placeholder="Your Email" className='col-8 rounded-5 border-2' />
          <button type="submit" className='col-4 rounded-5 border-white text-white border-3 bg-black'>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default FooterTop;

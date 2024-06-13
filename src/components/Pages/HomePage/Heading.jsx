import React from 'react';


const Heading = () => {
    return (
      <div id='homepage_heading' className='pb-5'>
        <h2 className='text-black p-2 m-2'>
          Next Generation Funded Trading
        </h2>
        <div className='row justify-content-center'>
          <button className='bg-black text-white w-25 d-inline-block rounded-5 m-2'>Get Funded</button>
          <button className='d-inline-block w-25 rounded-5 m-2 border-dark'>Log In</button>
        </div>
      </div>
    )
}

export default Heading
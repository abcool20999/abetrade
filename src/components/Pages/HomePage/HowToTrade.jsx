import React from 'react';

const HowToTrade = () => {
    return (

        <div id='howtotrade' className='p-3 bg-black bg-opacity-10'>
        <h3>How to trade with AbeTrade</h3>
        <p>
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
        </p>
        <div className='row p-4'>
        <img src='../../../assets/check.png' className='w-50'></img>
        <div className='w-50'>
            <h3>Steps to access Fund</h3>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>01</div>
                <div className='d-inline-block col-10 text-black'>Create an account</div>
            </div>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>02</div>
                <div className='d-inline-block col-10 text-black'>Select fund amount</div>
            </div>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>03</div>
                <div className='d-inline-block col-10 text-black'>Start Trading</div>
            </div>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>04</div>
                <div className='d-inline-block col-10 text-black'>Earn 90% of profits</div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default HowToTrade
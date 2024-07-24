<<<<<<< HEAD
import React from 'react';

const HowToTrade = () => {
    return (

        <div id='howtotrade' className='p-3 bg-black bg-opacity-10 pt-5'>
        <h3>How to trade with AbeTrade</h3>
        <p>
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
        </p>
        <div className='row p-4 mx-auto w-75'>
        <img src='../../../assets/howtotrade.jpg' className='w-50 mx-5'></img>
        <div className='w-25 mx-5'>
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

=======
import React from 'react';

const HowToTrade = () => {
    return (

        <div id='howtotrade' className='p-3 bg-black bg-opacity-10 pt-5' >
            <h3 style={{ fontWeight: 'bold', fontSize: '24px' }}>How to trade with AbeTrade</h3>
            <p>
                Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
            </p>
            <div className='row p-4 mx-auto w-75'>
                <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                    <img src='../../../assets/bodypic.png' className='w-200 h-auto mx-5' alt='Body Pic' style={{ maxHeight: '400px', flex: '1' }} />
                    <div style={{ flex: '2', marginLeft: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ display: 'inline-block', fontWeight: '900', fontSize: '24px', whiteSpace: 'nowrap' }}>Steps to access Fund</h3>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: 'white', border: '1px solid lightgray', padding: '0.5rem', marginTop: '0.5rem' }}>
                            <div style={{ display: 'inline-block', width: '15%', height: '100%', borderRadius: '5px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>01</div>
                            <div style={{ display: 'inline-block', width: '85%', color: 'black', paddingLeft: '0.5rem' }}>Create an account</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: 'white', border: '1px solid lightgray', padding: '0.5rem', marginTop: '0.5rem' }}>
                            <div style={{ display: 'inline-block', width: '15%', height: '100%', borderRadius: '5px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>02</div>
                            <div style={{ display: 'inline-block', width: '85%', color: 'black', paddingLeft: '0.5rem' }}>Select fund amount</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: 'white', border: '1px solid lightgray', padding: '0.5rem', marginTop: '0.5rem' }}>
                            <div style={{ display: 'inline-block', width: '15%', height: '100%', borderRadius: '5px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>03</div>
                            <div style={{ display: 'inline-block', width: '85%', color: 'black', paddingLeft: '0.5rem' }}>Start Trading</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: 'white', border: '1px solid lightgray', padding: '0.5rem', marginTop: '0.5rem' }}>
                            <div style={{ display: 'inline-block', width: '15%', height: '100%', borderRadius: '5px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>04</div>
                            <div style={{ display: 'inline-block', width: '85%', color: 'black', paddingLeft: '0.5rem' }}>Earn 90% of profits</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

>>>>>>> efed4b5 (“trades”)
export default HowToTrade
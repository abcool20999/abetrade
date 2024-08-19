import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <div className='m-5'>
                <h2>Testimonials</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bibendum amet at molestie mattis.
                </p>
            </div>
            <nav aria-label="Available Capital Options">
                <ul class="row justify-content-between">
                    <li class="col-1 align-content-center">
                        <a class="" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="col-4 bg-black bg-opacity-10">
                        <h5 className="row align-content-center" href="#">
                            <svg className='d-inline w-25'></svg>
                            <span className='d-inline w-75'>Zoomer</span>
                        </h5>
                        <p>
                            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
                        </p>
                        <div className="row">
                            <svg className=''></svg>
                            <h5>Author Name</h5>
                            <p className="text-black">Role</p>
                        </div>
                    </li>
                    <li class="col-4 bg-black bg-opacity-10">
                        <h5 class="row" href="#">
                            <svg className='col-2'></svg>
                            <span className='col-10'>Zoomer</span>
                        </h5>
                        <p>
                            Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
                        </p>
                        <div className="row">
                            <svg></svg>
                            <h5>Author Name</h5>
                            <p className="text-black">Role</p>
                        </div>
                    </li>
                    <li class="col-1 align-content-center">
                        <a class="" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )}


    export default Testimonials
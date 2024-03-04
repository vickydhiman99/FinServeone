import React from 'react'
import './at.yourservice.css'

import image from '../../Assets/Image/img1.png'
const AtYourService = () => {
    return (
        <div className="container">
            <div className="row" id='at-your-service'>
                <div className="col-lg-6 col-md-6 col-xs-12 image">
                    <img className='image' src={image} alt="bussines-people" />
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className='content-ul'>
                        <h1>At your Service</h1>
                        <ul>
                            <li>Connect Online</li>
                            <li>Chat Bot</li>
                            <li>Get a callback</li>
                            <li>Locate Us</li>
                            <li>Watsapp</li>
                            <li>Customer Contact number</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtYourService
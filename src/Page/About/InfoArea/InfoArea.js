import React from 'react'
import './infoarea.css'
import image from '../../../Assets/Image/about-img.jpg'
const InfoArea = () => {
    return (
        <section id="infoarea">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-lg-6">
                      <img src={image} alt="infi-image" className='w-100' />
                    </div>
                    <div className="col-lg-6">
                       <h1>Who we are to Serave the nation</h1><br />
                       <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.</p>
                       <br />
                       <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoArea
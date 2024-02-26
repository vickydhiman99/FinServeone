import React from 'react'
import './consultant.css'
import image from '../../Assets/Image/consultantimg.jpg'
import img2 from '../../Assets/Image/t1.jpg'
import img3 from '../../Assets/Image/t2.jpg'
import img4 from '../../Assets/Image/t4.jpg'
const Consultant = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h3>Our Consultants</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 consultant">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={image} alt="Card-image-cap" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 consultant">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={img2} alt="Card-image-cap" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 consultant">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={img3} alt="Card image cap" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 consultant">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={img4} alt="Card image cap" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Consultant
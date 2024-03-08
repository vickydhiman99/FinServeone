import React from 'react'
import './trusted.partner.css'
import Slider from "react-slick";
import image from '../../Assets/Image/trusted-2.png'
import image1 from '../../Assets/Image/trusted-1.png'
import image2 from '../../Assets/Image/trusted-3.png'
import image3 from '../../Assets/Image/trusted-4.png'
import image4 from '../../Assets/Image/trusted-5.png'
import image5 from '../../Assets/Image/trusted-6.png'
import image6 from '../../Assets/Image/trusted-7.png'

const TrustedPartner = () => {
    var items = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <section id="Trusted-Partners">
            <div className="title">
                <h1>Our Trusted Partners</h1>
            </div>
            <div className="slider-sect">
                <div className="container-fluid">
                    <Slider {...items}>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <div>
                            <img src={image4} alt="" />
                        </div>
                        <div>
                            <img src={image5} alt="" />
                        </div>
                        <div>
                            <img src={image6} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default TrustedPartner
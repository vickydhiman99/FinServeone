import React from 'react'
import './trusted.partner.css'
import Slider from "react-slick";
import image from '../../../Assets/Image/consultantimg-1.jpg'

const ProductBanner = () => {
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
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div><div>
                        <img src={image} alt="" />
                    </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ProductBanner
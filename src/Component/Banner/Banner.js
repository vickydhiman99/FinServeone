import React from 'react'
import image from '../../Assets/Image/a.jpg'
import image2 from '../../Assets/Image/b.jpg'
import image3 from '../../Assets/Image/c.jpg'
import image4 from '../../Assets/Image/d.jpg'
import image5 from '../../Assets/Image/f.jpg'
import image6 from '../../Assets/Image/g.jpg'
import image7 from '../../Assets/Image/h.jpg'
import image8 from '../../Assets/Image/i.jpg'
import image9 from '../../Assets/Image/j.jpg'
import image10 from '../../Assets/Image/k.jpg'
import './banner.css'

// const bannerData = [
//     {image:'../Assets/Image/1.jpg'},
//     {image:'../Assets/Image/2.jpg'},
//     {image:'../Assets/Image/3.jpg'},
//     {image:'../Assets/Image/4.jpg'},
//     {image:'../Assets/Image/5.jpg'},
//     {image:'../Assets/Image/6.jpg'},
//     {image:'../Assets/Image/7.jpg'},
//     {image:'../Assets/Image/8.jpg'},
//     {image:'../Assets/Image/9.jpg'},
//     {image:'../Assets/Image/10.jpg'},
// ]

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image2} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image3} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image4} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image5} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image6} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image7} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image8} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image9} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height:'75vh'}}  src={image10} alt="First slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Banner
import React from 'react'
import './testimonial.style.css'
import image from '../../Assets/Image/consultantimg-1.jpg'
import image2 from '../../Assets/Image/consultantimg-2.jpg'
import image3 from '../../Assets/Image/consultantimg-4.jpg'
const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="container">
            <div style={{textAlign:'center', padding:'2vh 0'}}>
              <h1>Testimonials</h1>
            </div>
                <div className="row m-0">
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="card" >
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Finn Styles, <br /><span>Software Engineer</span></h5>
                                    <p className="card-text">Testimonials are short quotes from
                                    people who love your brand. It's a
                                    great way to convince customers
                                    to try your services.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="card" >
                            <img className="card-img-top" src={image2} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Olowe, Business<br /><span>Owner</span></h5>
                                    <p className="card-text">Testimonials are short quotes from
                                    people who love your brand. It's a
                                    great way to convince customers
                                    to try your services.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="card" >
                            <img className="card-img-top" src={image3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Steve Martin,<br /><span>Freelancer</span></h5>
                                    <p className="card-text">Testimonials are short quotes from
                                    people who love your brand. It's a
                                    great way to convince customers
                                    to try your services.</p>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Testimonial
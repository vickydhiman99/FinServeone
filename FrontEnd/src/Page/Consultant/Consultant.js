import React from 'react'
import './Consultant.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import image from '../../Assets/Image/consultantimg-1.jpg'
import image2 from '../../Assets/Image/consultantimg-2.jpg'
import image3 from '../../Assets/Image/consultantimg-3.jpg'
import image4 from '../../Assets/Image/consultantimg-4.jpg'
import { Link } from 'react-router-dom';

const data = [
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' },
    { id: 1, title: 'Tony Stark', Titles: 'Financial Consultant', paragraph: 'Exprience - 10 Years' }
]

const Consultant = () => {
    return (
        <section id="consultant">
            <div className="container">
                <h1>Our Consultants</h1>
                <div className="row m-0 mt-5">
                    {
                        data.map((res, index) => (
                            <div className="col-lg-3 col-md-6 col-xs-12 my-3" key={index}>
                                <div className='consult-main-card'>
                                    <Link to='/profile'><img style={{ height: '30vh', borderRadius: '25%' }} src={image} alt="" /></Link>
                                    <div className="star mt-4">
                                      <span>5</span>
                                      <span><StarRateIcon style={{marginBottom:'2px'}}/></span>
                                      <span>|</span>
                                      <span>100</span>
                                    </div>
                                    <div>
                                        <h4>{res.title}</h4>
                                        <h6>{res.Titles}</h6>
                                        <p>{res.paragraph}</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Consultant
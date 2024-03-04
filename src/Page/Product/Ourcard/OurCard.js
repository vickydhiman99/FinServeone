import React from 'react'
import './ourcard.style.css'
import img from '../../../Assets/Image/product-logo-1.png'
import img2 from '../../../Assets/Image/bussiness-logo.png'
import img3 from '../../../Assets/Image/bussiness-logo.png'
import img4 from '../../../Assets/Image/bussiness-logo.png'

const data = [
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
    {
        image: '../../../Assets/Image/bussiness-logo.png',
        title: 'Personal Loan',
        cont: 'Unlock the Door to YourDream Home with ourHome Loans. Apply Now'
    },
]


const OurCard = () => {
    return (
        <div style={{marginTop:'7vh'}} className='container'>
        <div className="content">
          <h1>Our Products</h1>
          <p>Financial Freedom Begins Here: Discover Our Range of Loan Products.</p>
        </div>
            <div className="row m-0 card-section">
                {
                    data.map((res, index) => (
                        <div className="col-lg-3 col-md-6 col-xs-12 my-1" key={index}>
                            <div className="card-content">
                              <img className='product-image' src={img} alt="" />
                              <h5>Personal Loan</h5>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quidem.</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default OurCard
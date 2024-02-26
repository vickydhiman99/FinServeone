import React from 'react'
import img from '../../Assets/Image/finance_icon.png'
import './Service.css'

const imageData = [
    {id:1, url: '../Assets/Image/finance_icon.png', title: 'Finance', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' },
    {id:2, url: '../Assets/Image/personal_guidance_icon.png', title: 'Personal Guidance', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' },
    {id:3, url: '../Assets/Image/insurance_icon.png', title: 'Insurance', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' },
    {id:4, url: '../Assets/Image/tax_filing_icon.png', title: 'Tax-filling', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' }
]
const Service = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h3>Our Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                {
                    imageData.map((res, index) => (
                        <div key={res.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div>
                                <img style={{ height: '80px' }} src={img} alt="" />
                                <h4>{res.title}</h4>
                                <p>{res.con}</p>
                            </div>
                        </div>
                    ))
                }




            </div>



        </div>
    )
}

export default Service
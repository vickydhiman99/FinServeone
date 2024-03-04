import React from 'react'
import img from '../../Assets/Image/bussiness-logo.png'
import img1 from '../../Assets/Image/personal-guided-logo.png'
import img2 from '../../Assets/Image/insurance-logo.png'
import img3 from '../../Assets/Image/tax-filling.png'
import style from './style.module.css'

const imageData = [
    { id: 1, url: '../Assets/Image/finance_icon.png', title: 'Finance', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' },
    { id: 2, url: '../Assets/Image/personal_guidance_icon.png', title: 'Personal Guidance', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' },
    { id: 3, url: '../Assets/Image/insurance_icon.png', title: 'Insurance', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' },
    { id: 4, url: '../Assets/Image/tax_filing_icon.png', title: 'Tax-filling', con: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.' }
]
const Service = () => {
    return (
        <div className='container'>
            <div className={style.title}>
                <h1>Our Service</h1>
                <p>Your Financial Journey, Perfected: Choose Our Comprehensive Services</p>
            </div>
            <div className="">
            <div className="row m-0" style={{display:'flex', }}>
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className={style.card} style={{ width: '16rem' }}>
                        <img className="card-img-top" style={{height:'120px', width:'90px'}} src={img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Finance</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.card} style={{ width: '16rem' }}>
                        <img className="card-img-top" style={{height:'120px', width:'90px'}} src={img1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Personal Guidance </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.card} style={{ width: '16rem' }}>
                        <img className="card-img-top" style={{height:'120px', width:'90px'}} src={img2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Insurance Assistance </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.card} style={{ width: '16rem' }}>
                        <img className="card-img-top" style={{height:'120px', width:'90px'}} src={img3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Tax-Filing</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Service
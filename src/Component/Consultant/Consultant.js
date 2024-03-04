import React from 'react'
import style from './style.module.css'
import image from '../../Assets/Image/consultantimg-1.jpg'
import img2 from '../../Assets/Image/consultantimg-2.jpg'
import img3 from '../../Assets/Image/consultantimg-3.jpg'
import img4 from '../../Assets/Image/consultantimg-4.jpg'
import { Link } from 'react-router-dom'
const Consultant = () => {
    return (
        <div className='container'>
            <div className={style.title}>
                <h1>Our Consultants</h1>
                <p>Expert Guidance, Personalized Solutions: Meet Our Financial
                    Consultants.</p>
            </div>
            <div className="">
                <div className="row m-0" style={{ display: 'flex', }}>
                    <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className={style.card} style={{ width: '16rem' }}>
                            <Link to='/consultant'><img className="card-img-top" src={image} alt="Card image cap" /></Link>
                            {/*<div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>*/}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.card} style={{ width: '16rem' }}>
                            <img className="card-img-top" src={img2} alt="Card image cap" />
                            {/*<div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>*/}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.card} style={{ width: '16rem' }}>
                            <img className="card-img-top" src={img3} alt="Card image cap" />
                            {/*<div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>*/}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.card} style={{ width: '16rem' }}>
                            <img className="card-img-top" src={img4} alt="Card image cap" />
                            {/*<div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>*/}
                        </div>
                    </div>
                </div>


            </div>
            <div className={style.showall}>
                <Link to='/consultant'>Show All</Link>
            </div>
        </div>
    )
}

export default Consultant
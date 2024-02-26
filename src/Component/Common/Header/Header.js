import React from 'react'
import { Link } from "react-router-dom"
import './header.css'
import logo from '../../../Assets/Image/l-6.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const headerData = [
    { path: '/', Title: 'HOME' },
    { path: '/about', Title: 'ABOUT' },
    { path: '/product', Title: 'PRODUCT' },
    { path: '/service', Title: 'SERVICES' },
    { path: '/contact', Title: 'CONTACT' },
    { path: '/career', Title: 'CAREERS' }
]

const Header = () => {
    return (
        <div className='fixed-top'>

            <div className="row m-0 head">
                <div className="col-lg-6 col-md-6 headerone">
                    <div className='icon'>
                        <CallIcon />
                        <span style={{ whiteSpace: 'nowrap' }}>+91 012 3654 896</span>
                    </div>

                    <div className='icon'>
                        <EmailIcon />
                        <span>support@finserveone.com</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6  headertwo">
                    <button className='primary-btn'>Book Finservone</button>
                </div>
            </div>


            <nav className="navbar navbar-expand-md navbar-dark " id="nav">
                <div className="container">
                    <a className="navbar-brand " href="#"><img style={{ height: '7vh' }} src={logo} alt="" /></a>
                   {/* <span className='logotitle'>FinservOne</span>*/}
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mytoggle">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse main" id="mytoggle">
                        <ul className="navbar-nav ml-auto ">
                            {
                                headerData.map((res, index) => (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link active" href={res.path}>{res.Title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
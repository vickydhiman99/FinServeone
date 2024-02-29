import React from 'react'
import { navData } from '../../Data/ProductService';
import './header.css'
import logo from '../../../Assets/Image/l-6.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';





const Header = () => {
    
    let headerr = document.querySelector('.headerr');


    window.onscroll = () => {
        if (window.scrollY > 0) {
            headerr.classList.add('active')
        } else {
            headerr.classList.remove('active')
        }
    }
    return (
        <div id='headerfile' className='headerr fixed-top'>

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
                    <Link className="navbar-brand " to='/'><img style={{ height: '7vh' }} src={logo} alt="" /></Link>
                    {/* <span className='logotitle'>FinservOne</span>*/}
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mytoggle">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse main" id="mytoggle">
                        <ul className="navbar-nav ml-auto ">
                            {
                                navData.map((res, index) => (
                                    <li key={index} className="nav-item">
                                        <Link className="nav-link active" to={res.path}>{res.Name}</Link>
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
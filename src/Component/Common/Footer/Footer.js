import React from 'react'
import './footer.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Footer = () => {
    return (
        <section id="footer">
            <div className='container footer'>
                <div className="row">
                    <div className="col-lg-2 col-md-6">
                        <div className="footerfirst">
                            <h6 style={{ color: 'white' }}>Top Product</h6>
                            <ul style={{ color: 'white' }}>
                                <li><a style={{color:'#84919e'}} href="#">Managed Website</a></li>
                                <li><a style={{color:'#84919e'}} href="#">Manage Reputation</a></li>
                                <li><a style={{color:'#84919e'}} href="#">Power Tools</a></li>
                                <li><a style={{color:'#84919e'}} href="#">Marketing Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footersecond">
                            <h6 style={{ color: 'white' }}>Contact Us</h6>
                            <p style={{ color: '#84919e' }}>56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA</p>
                            <h3 style={{ color: 'white' }}>012-6532-568-9746</h3>
                            <h3 style={{ color: 'white' }}>012-6532-568-97468</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="footerthird">
                            <h6 style={{color:'#fff'}}>Newsletter</h6>
                            <p style={{color:'#84919e'}}>You can trust us. we only send promo offers, not a single spam.</p>
                            <div id='signup'>
                                <form action="">
                                  <div className="row">
                                     <div className="col-lg-8 col-md-12">
                                        <input className='input' type="email" name='email' placeholder='your email address' />
                                     </div>
                                     <div  className="col-lg-4 col-md-12">
                                        <button style={{paddingRight:'55px'}} className='btn'>Subscribe <ArrowRightAltIcon/></button>
                                     </div>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row m-0 footer-bottom'>
                  <div className="col-lg-8 col-sm-12">
                     <p style={{color:'#777777'}}>Copyright ©2024 All rights reserved | This template is made <FavoriteBorderIcon style={{color:'#69be00'}}/> with  by <span>FinServeone</span> </p>
                  </div>
                  <div className="col-lg-4 col-sm-12 social-icon">
                     <a href=""><FacebookOutlinedIcon/></a>
                     <a href=""><FacebookOutlinedIcon/></a>
                     <a href=""><FacebookOutlinedIcon/></a>
                     <a href=""><FacebookOutlinedIcon/></a>
                  </div>
                </div>
                
            </div>
        </section>


    )
}

export default Footer
import React from 'react'
import './banner.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='banner'>
            <div className="content">
                <h2>Service</h2>
                
                <div className='icon'><p><Link to='/product' style={{color:'#fff', textDecoration:'none'}}>Product</Link></p> <p><ArrowRightAltIcon/></p> <p>Service</p></div>
            </div>
        </div>
    )
}

export default Banner
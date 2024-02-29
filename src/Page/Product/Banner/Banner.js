import React from 'react'
import './banner.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='banner'>
            <div className="content">
                <h2>Product</h2>
                
                <div className='icon'><p><Link to='/about' style={{color:'#fff', textDecoration:'none'}}>About</Link></p> <p><ArrowRightAltIcon/></p> <p>Product</p></div>
            </div>
        </div>
    )
}

export default Banner
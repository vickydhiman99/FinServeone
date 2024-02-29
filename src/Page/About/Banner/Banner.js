import React from 'react'
import './banner.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='banner'>
            <div className="content">
                <h2>About Us</h2>
                
                <div className='icon'><p><Link style={{color:'#fff', textDecoration:'none'}} to='/'>Home</Link></p> <p><ArrowRightAltIcon/></p> <p>About</p></div>
            </div>
        </div>
    )
}

export default Banner
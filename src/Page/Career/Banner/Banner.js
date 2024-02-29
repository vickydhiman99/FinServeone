import React from 'react'
import './banner.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='banner'>
            <div className="content">
                <h2>Career</h2>
                
                <div className='icon'><p><Link style={{color:'#ffff', textDecoration:'none'}} to='/contact'>Contact</Link></p> <p><ArrowRightAltIcon/></p> <p>Career</p></div>
            </div>
        </div>
    )
}

export default Banner
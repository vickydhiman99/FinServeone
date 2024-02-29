import React from 'react'
import './banner.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='banner'>
            <div className="content">
                <h2>Contact</h2>
                
                <div className='icon'><p><Link to='/service' style={{color:'#fff', textDecoration:'none'}}>Service</Link></p> <p><ArrowRightAltIcon/></p> <p>Contact</p></div>
            </div>
        </div>
    )
}

export default Banner
import React from 'react'
import './multicard.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Assets/Image/creative.png'
import img2 from '../../Assets/Image/creative1.png'
import img3 from '../../Assets/Image/finance_icon.png'
import img4 from '../../Assets/Image/premium.png'
import img5 from '../../Assets/Image/premiumlabel.png'

const Multicard = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container' style={{marginTop:'30px'}}>
            <Carousel responsive={responsive}>
                <div><img style={{color:'grey'}} src={img} alt="" /></div>
                <div><img style={{color:'grey'}} src={img2} alt="" /></div>
                <div><img style={{color:'grey'}} src={img3} alt="" /></div>
                <div><img style={{color:'grey'}} src={img4} alt="" /></div>
                <div><img style={{color:'grey'}} src={img5} alt="" /></div>

            </Carousel>
        </div>
    )
}

export default Multicard
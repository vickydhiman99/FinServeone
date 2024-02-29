import React from 'react'
import Banner from './Banner/Banner'
import Leadership from './Leadership/Leadership'
import Consultant from '../../Component/Consultant/Consultant'
import InfoArea from './InfoArea/InfoArea'

const About = () => {
  return (
    <div className=''>
        <Banner/>
        <Leadership/>
        <InfoArea/>
        <Consultant/>
    </div>
  )
}

export default About
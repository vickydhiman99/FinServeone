import React from 'react'
import Leadership from './Leadership/Leadership'
import Consultant from '../../Component/Consultant/Consultant'
import InfoArea from './InfoArea/InfoArea'

const About = () => {
  return (
    <div className=''>
        <Leadership/>
        <InfoArea/>
        <Consultant/>
    </div>
  )
}

export default About
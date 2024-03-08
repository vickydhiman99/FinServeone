import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Form from '../../Component/Form/Form'
import Consultant from '../../Component/Consultant/Consultant'
import Service from '../../Component/OurService/Service'
import AtYourService from '../../Component/AtyourService/AtYourService'
import Testimonial from '../../Component/Testimonial/Testimonial'
import TrustedPartner from '../../Component/Trusted/TrustedPartner'
const Home = () => {
    return (
        <div>
            <Banner />
            <Form />
            <Service />
            <Consultant />
            <AtYourService/>
            <Testimonial/>
            <TrustedPartner/>
        </div>
    )
}

export default Home
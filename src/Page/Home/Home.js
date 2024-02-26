import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Form from '../../Component/Form/Form'
import Consultant from '../../Component/Consultant/Consultant'
import Multicard from '../../Component/MulticardSlider/Multicard'
import Service from '../../Component/OurService/Service'
const Home = () => {
    return (
        <div>
            <Banner />
            <Form />
            <Service />
            <Consultant />
            <Multicard />
        </div>
    )
}

export default Home
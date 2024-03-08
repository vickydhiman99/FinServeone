import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import Home from '../Page/Home/Home'
import Service from '../Page/Service/Service'
import Product from '../Page/Product/Product'
import About from '../Page/About/About'
import Contact from '../Page/Contact/Contact'
import Career from '../Page/Career/Career'
import Header from '../Component/Common/Header/Header'
import Footer from '../Component/Common/Footer/Footer'
import Consultant from '../Page/Consultant/Consultant'
import Profile from '../Page/Consultant/Profile/Profile'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route index element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/product' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/career' element={<Career />} />
                <Route path='/consultant' element={<Consultant />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
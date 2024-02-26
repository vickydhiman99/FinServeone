import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Form from '../Form/Form'
import Home from '../../Page/Home/Home'
import Consultant from '../Consultant/Consultant'
import Multicard from '../MulticardSlider/Multicard'
import Service from '../OurService/Service'

const Page = () => {
    return (
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Form/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/product' element={<Consultant/>}/>
            <Route path='/contact' element={<Multicard/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    )
}

export default Page

// <div>
//             <Header />
           
//             <Footer />
//         </div>
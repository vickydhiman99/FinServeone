import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Home from '../../Page/Home/Home'
import About from '../../Page/About/About'
import Product from '../../Page/Product/Product'
import Service from '../../Page/Service/Service'
import Contact from '../../Page/Contact/Contact'
import Career from '../../Page/Career/Career'

const Page = () => {
    return (
        <BrowserRouter>
        <Header/>
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/product' element={<Product/>}/>
           <Route path='/service' element={<Service/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/career' element={<Career/>}/>
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
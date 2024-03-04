import React from 'react'
import Banner from './Banner/Banner'
import OurCard from './Ourcard/OurCard'
import GettingLoan from './GettingLoan/GettingLoan'

const Product = () => {
  return (
    <div style={{marginTop:'16vh'}}>
       <Banner/>
       <OurCard/>
       <GettingLoan/>
    </div>
  )
}

export default Product
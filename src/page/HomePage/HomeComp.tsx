// import React from 'react'

import Deal from "./Deal"
import Hero from "./Hero"
// import Partner from "./Deal"
import Product from "./Product"
import Services from "./Services"
import Testimony from "./Testimony"


const HomeComp = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Product/>
        <Deal/>
        <Testimony/>
      
    </div>
  )
}

export default HomeComp
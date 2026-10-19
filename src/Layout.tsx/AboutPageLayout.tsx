// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "../component/block/Header"
import Footer from "../component/block/Footer"

const AboutPageLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AboutPageLayout
// import React from 'react'

import { Outlet } from "react-router-dom"
import Header2 from "../component/block/Header"
import Footer from "../component/block/Footer"

const HomePageLayout = () => {
  return (
    <div>
        <Header2/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomePageLayout
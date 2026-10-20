// import React from 'react'

import { Outlet } from "react-router-dom"
import Header2 from "../component/block/Header"
import Footer from "../component/block/Footer"
// import CardProduct from "../page/HomePage/CardProduct"
// import Card from "../page/HomePage/Card"

const HomePageLayout = () => {
  return (
    <div>
        <Header2/>
        <Outlet/>
        {/* <CardProduct/> */}
        <Footer/>
    </div>
  )
}

export default HomePageLayout
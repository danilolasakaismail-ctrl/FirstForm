// import React from 'react'

import { CgArrowRight } from "react-icons/cg"
import { GiLifeSupport } from "react-icons/gi"
import { MdOutlineGppGood } from "react-icons/md"
import { RiSecurePaymentLine } from "react-icons/ri"
import pho from  "../../assets/IMG/right-img.png"
import { NavLink } from "react-router-dom"


const Hero = () => {
  return (
    <>
    <div  className="lg:h-[97vh] md:h-[97vh] h-[110vh] w-full bg-[url('hom-dam-bg.png')] bg-center bg-cover lg:flex flex md:flex justify-center items-center ">
      <div className=" w-[90%] h-[90%] lg:flex lg:flex-row md:flex-row  flex flex-col  justify-center lg:justify-between  items-center">
      <div className=" lg:w-[50%]  gap-6 flex flex-col justify-center items-center lg:items-start">
        <p className=" text-blue-500 font-medium text-[10px] md:text-[20px] lg:text-[20px] ">Latest Phones & Laptops</p>
        <h1 className="text-white font-bold  text-3xl text-center md:text-left md:text-6xl md:mt-3 lg:text-left lg:text-6xl lg:mt-3">Power Your World</h1>
        <p className=" text-white text-[17px ] w-full text-center md:text-left md:text-3xl md:mt-5 md:mb-3.5 lg:text-left lg:text-3xl lg:mt-5 lg:mb-3.5">Top brands Best prices, fast delivery</p>
        <NavLink to='/shop'>
        <button className=" h-10 lg:h-14 flex items-center w-[90%] md:w-50 lg:w-50 justify-center gap-2.5 bg-[blue] md:p-5 lg:p-5 rounded-4xl md:pl-10 md:mb-8 md:pr-10  lg:pl-10 lg:mb-8 lg:pr-10 hover:bg-blue-500  text-white">
        <p>  Shop Now </p><CgArrowRight className=" text-white"/>
        </button>
        </NavLink>
        <hr  className=" text-blue-500 w-[90%] h-1.5 md:mb-3 lg:mb-3 "/>
        <div className=" lg:flex flex gap-8 items-center">
        <div className="flex items-center gap-2 text-white font-medium lg:text-[16px] text-[10px]"><MdOutlineGppGood /><p>Genuine Products</p></div>
        <div className="flex items-center gap-2 text-white font-medium lg:text-[16px] text-[10px]"><RiSecurePaymentLine /><p>Secure Payment</p></div>
        <div className="flex items-center gap-2 text-white font-medium lg:text-[16px] text-[10px]"><MdOutlineGppGood /><p>Fast Delivery</p></div>
        <div className="flex items-center gap-2 text-white font-medium lg:text-[16px] text-[10px]"><GiLifeSupport/><p>24/7 Support</p></div>
        </div>
      </div>
      <div>
        <img src={pho} className=" w-70 lg:w-180 md:w-180"  alt="" />
      </div>
    </div>
    </div>

    </>
  )
}

export default Hero
// import React from 'react'

import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <div className=" w-full h-[94vh] bg-[url('bac.png')] flex justify-center items-center bg-cover bg-center">
            <div className="w-[90%] h-[90%] flex justify-center  md:justify-start lg:justify-start items-center ">
                <div>

            {/* <NavLink to="/">
          <p className="font-medium text-2xl">Home</p>
          </NavLink>
          <p className="w-2 h-2 rounded-3xl bg-white"></p> */}
           <NavLink to="/contact" className="text-center">
          <p className="font-medium text-2xl text-[#ffffffc4]  text-center lg:text-left md:text-left ">Contact</p>
          </NavLink>
    
   <h1 className="text-white font-bold  text-4xl text-center lg:text-left md:text-left lg:text-6xl lg:mt-3">Contact Us</h1>
   <p className=" text-white text-[17px ]  lg:w-200 text-center lg:text-left lg:text-3xl lg:mt-5 lg:mb-3.5">We're here to help! Get in touch with us for any questions, orders, or support you need.</p>
                </div>
            </div>
    </div>
  )
}

export default Hero
// import React from 'react'
import { CgArrowRight } from "react-icons/cg"
import sec from "../../assets/IMG/Modern Gadget Showcase.png"


const Hero = () => {
  return (
    <div className=" w-full min-h-[110vh] lg:min-h-screen lg:h-screen pt-20 bg-[url('ba.png')] flex justify-center items-center bg-cover bg-center ">
        <div className=" w-[90%] h-[90%] lg:flex lg:flex-row md:flex-row  flex flex-col  justify-center lg:justify-between  items-center">
           <div className=" lg:w-[50%]  gap-4 flex flex-col justify-center items-center lg:items-start">
                <p className="font-medium text-2xl  text-[#ffffffc4] ">About</p>
        <h1 className="text-white font-bold w-90 lg:w-150  lg:leading-17  text-3xl text-center md:text-left md:text-6xl lg:text-left lg:text-6xl ">Your Trusted Store for Quality Products</h1>
        <p className=" text-white text-[14px] lg:p-0  w-full text-center md:text-left md:text-2xl md:mt-5 md:mb-3.5 lg:text-left lg:text-2xl lg:mt-5 lg:mb-3.5">Smart choices. Quality products. Shopping made easy.</p>
        <p className=" text-white font-bold lg:text-blue-400 w-97 lg:w-150 lg:text-left text-center ">Welcome to Damilola Stores, your reliable destination for quality phones, laptops, accessories, and other everyday products. We are committed to making it easier for you to find the products you need at competitive prices.</p>
                <button className=" h-10 lg:h-14 flex items-center w-[90%] md:w-50 lg:w-60 justify-center gap-2.5 bg-[blue] md:p-5  rounded-4xl md:pl-10 md:mb-8 md:pr-10  lg:pl-5  lg:pr-5  text-white hover:bg-blue-500">
                <p> Explore our Store  </p><CgArrowRight className=" text-white"/>
                </button>
           </div> 
           <div>
        <img src={sec} className=" w-70 lg:w-180 md:w-180"  alt="" />
      </div> 
        </div>
    </div>
  )
}

export default Hero
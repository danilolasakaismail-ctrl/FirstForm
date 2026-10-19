// import React from 'react'

import { BsArrowRight } from "react-icons/bs"
import phone from "../../assets/IMG/phones.png"
import laptop from "../../assets/IMG/laptops.png"
import access from "../../assets/IMG/accessories.png"
import deal from '../../assets/IMG/specila.png'
import { NavLink } from "react-router-dom"


const Services = () => {
  return (
    <div className="w-full min-h-screen lg:min-h-[70vh] bg-white flex justify-center items-center  ">
      <div className="w-[90%] h-[90%] md:w-[99%] lg:w-[90%] flex flex-col items-center gap-7 ">
        <div className="w-full all flex flex-col lg:flex-row lg:justify-between items-center">
      <div className=" flex flex-col gap-4 lg:text-left md:text-left text-center w-full  ">
        <h1 className=" text-[#000014] text-2xl md:w-3xl lg:text-5xl font-bold ">Shop by Category</h1>
        <p className=" text-blue-500 text-[20px] lg:text-[27px] md:text[20px] ">Find the perfect device for your needs</p>
      </div>
      <NavLink to="/shop">
      <div className="inline-block justify-center items-center w-20 text-[15px] text-blue-600 ">
        View All &rarr;
      </div>
      </NavLink>
      </div>
      <div className=" flex lg:flex-row md:flex-row flex-col gap-11 md:gap-8 lg:gap-4.5">
        <div className=" w-89 lg:w-85  bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-3 ">
          <img src={phone} className=" w-39   lg:h-44  md:w-50 lg:w-40 " alt="" />
          <p className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium text-3xl lg:text-3xl ">Phones</p>
          <div className="flex items-center gap-10 md:gap-13 lg:gap-17">
            <p className="text-[#000014] w-50 text-[18px]">Latest smartphones from top brands</p>
            <NavLink to="/shop">
            <div  className="bg-[#000014] text-white text-[10px] w-10.5 h-10.5 rounded-4xl flex justify-center items-center">
            <BsArrowRight className="text-2xl "/>
            </div>
            </NavLink>
          </div>
          
        </div>
             <div className=" w-89 lg:w-85 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-3 ">
          <img src={laptop} className=" lg:h-44  w-39 md:w-50 lg:w-67 " alt="" />
          <p className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium text-3xl lg:text-3xl ">Laptops</p>
          <div className="flex items-center gap-10 md:gap-13 lg:gap-10">
            <p className="text-[#000014]  w-57 text-[18px]">PowerFul laptops for work, study and play</p>
            <NavLink to="/shop">
            <div  className="bg-[#000014] text-white text-[10px] w-10.5 h-10.5 rounded-4xl flex justify-center items-center">
            <BsArrowRight className="text-2xl "/>
            </div>
            </NavLink>
          </div>
          
        </div>
                   <div className=" w-89 lg:w-85 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-3 ">
          <img src={access} className=" w-48   lg:h-44  md:w-50 lg:w-67 " alt="" />
          <p className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%]  text-left  font-medium text-3xl lg:text-3xl ">Accessories</p>
          <div className="flex items-center gap-10 md:gap-13 lg:gap-10">
            <p className="text-[#000014] w-57 text-[18px]">Everything you need for your devices</p>
                <NavLink to="/shop">
            <div  className="bg-[#000014] text-white text-[10px] w-10.5 h-10.5 rounded-4xl flex justify-center items-center">
            <BsArrowRight className="text-2xl "/>
            </div>
            </NavLink>
          </div>
          
        </div>
                   <div className=" w-89 lg:w-85 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-3 ">
          <img src={deal} className=" w-48   lg:h-44  md:w-50 lg:w-67 " alt="" />
          <p className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium text-3xl lg:text-3xl ">Deals</p>
          <div className="flex items-center gap-10 md:gap-13 lg:gap-10">
            <p className="text-[#000014] w-57 text-[18px]">Great offers on your favorites products.</p>
                <NavLink to="/shop">
            <div  className="bg-[#000014] text-white text-[10px] w-10.5 h-10.5 rounded-4xl flex justify-center items-center">
            <BsArrowRight className="text-2xl "/>
            </div>
            </NavLink>
          </div>
          
        </div>


      </div>
      </div>
    </div>
  )
}

export default Services
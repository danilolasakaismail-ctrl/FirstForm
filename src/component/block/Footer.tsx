// import React from 'react'
import { FaFacebook, FaPhoneAlt } from "react-icons/fa"
import logo from "../../assets/IMG/AJdf4-removebg-preview.png"
import { MdEmail } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaSquareWhatsapp } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className=" w-full bg-[#061325] min-h-[50vh] flex justify-center items-center">
      <div className=" w-[90%] h-[90%] flex flex-col justify-center  gap-10 lg:gap-7  md:gag-7  " >
      <div className=" flex flex-col pt-6 lg:pt-0 md:pt-0 lg:flex-row md:flex-row items-left lg:items-center justify-between gap-14 lg:gap-0 md:gap-0">
        <div className="flex text-[#ffffffc4]  flex-col items-start  lg:items-start md:items-start justify-center gap-4 ">
          <img src={logo} className=" w-50 lg:w-100 "  alt="" />
          <div className=" flex items-center gap-4">
            <p className="text-[20px]">Phones</p>
            <p className="w-1 h-1 rounded-3xl bg-white"></p>
            <p className="text-[20px]">Laptops</p>
            <p className="w-1 h-1 rounded-3xl bg-white"></p>
            
            <p className="text-[20px]">More</p>
          </div>
          <p className=" text-[#ffffffc4] text-left md:text-left  font-medium tracking-[1px]">Qualty Tech | Great Prices | Your satisfaction Our Priority</p>
        </div>
        <div className="w-70 h-0.5 md:w-0.5 md:h-50 lg:w-0.5 lg:h-50 bg-white">   
        </div>
        <div className=" font-sans text-[18px] text-[#ffffffc4]  flex flex-col items-start  gap-2">
             <h4 className=" text-white font-medium text-2xl font-sans ">Quick Links</h4>
          <p>Home</p>
          <p>Phones</p>
          <p>Laptops</p>
          <p>Accessories</p>
          <p>Other Gadgets</p>
        </div>
      <div className="w-70 h-0.5 md:w-0.5 md:h-50 lg:w-0.5 lg:h-50 bg-white"> </div>
        <div className=" font-sans text-[18px] text-[#ffffffc4] flex flex-col items-start gap-2">
           <h4 className=" text-white font-medium text-2xl font-sans ">Contact Us</h4>
           <div className=" flex items-center gap-2 "> <FaPhoneAlt className="size-6" /><p>+234 810 123 4879</p></div>
           <div className=" flex items-center gap-2 "> <MdEmail className="size-6" /><p>damilolasakaismail@gmail.com</p></div>
           <div className=" flex items-center gap-2  "> <IoLocationSharp className="size-6"/><p>Nationwide Delivery</p></div>
        </div>
       <div className="w-70 h-0.5 md:w-0.5 md:h-50 lg:w-0.5 lg:h-50 bg-white"> </div>
        <div className=" flex flex-col justify-center items-start gap-3">
          <h4 className=" text-white font-medium text-2xl font-sans ">Follow Us</h4>
          <div className=" flex justify-center items-start gap-4 text-4xl text-white ">
            <FaFacebook />
            <BiLogoInstagramAlt />
            <FaSquareWhatsapp />


          </div>
          <p className=" text-[#ffffffc4]  w-44">Stay connected for the latest deals and updates</p>
        </div>
      </div>
      <hr className="h-1 w-full text-blue-500"/>
      <div className="flex flex-col lg:flex-row md:flex-row pb-4 md:pb-0 lg:pb-0 justify-between items-center">
        <div className=" text-[#ffffffc4] flex items-center gap-1">
          <p>&copy;</p>
          <p>2026 Damilola stores. All rights reserved.</p>
        </div>
        <div className=" text-[#ffffffc4] flex items-center gap-2">
          <p>Shop Smart</p>
          <p className="w-1 h-1 rounded-3xl bg-white"></p>
          <p>stay Connected</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
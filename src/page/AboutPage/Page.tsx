// import React from 'react'
import wow from "../../assets/IMG/Screenshot 2026-10-12 123511.png"



const Page = () => {
  return (
    <div className="w-full min-h-[70vh] lg:mt-0 mt-10 lg:mb-0 mb-10 bg-white flex items-center justify-center">
        <div className=" w-[90%] h-[90%] lg:flex lg:flex-row md:flex-row  gap-3.5 lg:gap-0 flex flex-col  justify-center lg:justify-between  items-center">
     
     <div className="">
        <img src={wow} className=" w-100  lg:w-160 lg:h-100 rounded-3xl md:w-180"  alt="" />
      </div> 
             <div className="lg:w-[50%] items-center flex flex-col justify-center lg:items-start gap-2  lg:gap-7">
                <p  className="text-[#000014] text-[16px]  lg:text-[20px] font-bold ">Who We Are</p>
                <h1 className=" font-bold text-2xl lg:text-5xl text-center lg:text-left md:text-left text-blue-600 ">Damilola Stores</h1>
                <p className="text-[16px]  lg:text-[20px] text-center lg:text-left">Damilola Stores is a customer-focused retail business committed to providing quality products and a convenient shopping experience. We understand that choosing the right phone, laptop, or everyday item matters, which is why we aim to help our customers make informed purchasing decisions.</p>
                <p  className="text-[16px]  lg:text-[20px] ">Our goal is to build a store where customers can shop with confidence, enjoy excellent service, and find products that suit their needs and budgets.</p>
            </div>
      </div>
    </div>
  )
}

export default Page
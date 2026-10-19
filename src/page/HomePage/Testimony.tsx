// import React from 'react'

import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineGppGood, MdOutlineSupportAgent } from "react-icons/md";
import { VscTerminalSecure } from "react-icons/vsc";
import profi from "../../assets/IMG/pexels-victor-oluwayoju-1869509-35216995.jpg"
import { GoStarFill } from "react-icons/go";
import prof from "../../assets/IMG/pexels-hillary-disantos-1557063-4168696.jpg"
import pro from "../../assets/IMG/pexels-joshua-hansome-adroit-440714140-34592823.jpg"


const Testimony = () => {
  return (
    <div>
      <div className=" w-full min-h-screen lg:mt-0 mt-10   flex justify-center items-center ">
        <div className=" w-[90%]  h-[90%] lg:w-[90%] md:w-[99%] flex flex-col justify-center items-center gap-7    ">
          <div className=" first w-full flex flex-col gap-4 items-center justify-center ">
            <div className=" flex flex-col gap-4 lg:text-left md:text-left text-center w-full ">
              <h1 className=" text-[#000014] text-2xl md:w-3xl lg:text-5xl font-bold ">
                Why Choose Us?
              </h1>
              <p className="text-blue-500   text-[20px] lg:text-[27px] md:text[20px] ">
                We make tech shopping simple, safe and enjoyable
              </p>
            </div>
            <div className="mom w-full flex flex-col lg:flex-row md:flex-row gap-11 lg:gap-4 md:gap-7">
              <div className=" w-89 [box-shadow:0_0_4px_gray] h-28  rounded-2xl flex gap-5 items-center flex-row ">
                <div className="text-6xl text-blue-600">
                  <MdOutlineGppGood />
                </div>
                <div>
                  <h3 className=" font-medium text-[17px] ">
                    Genuine Products
                  </h3>
                  <p>100% original and brand new</p>
                </div>
              </div>

              <div className=" w-89 [box-shadow:0_0_4px_gray] h-28      rounded-2xl flex gap-5 items-center flex-row ">
                <div className="text-6xl text-blue-600 pl-2">
                  <VscTerminalSecure />
                </div>
                <div>
                  <h3 className=" font-medium text-[17px] ">Secure payment</h3>
                  <p>Multiple payment options</p>
                </div>
              </div>

              <div className=" w-89 [box-shadow:0_0_4px_gray] h-28      rounded-2xl flex gap-5 items-center flex-row ">
                <div className="text-6xl text-blue-600 pl-2">
                  <LiaShippingFastSolid />
                </div>
                <div>
                  <h3 className=" font-medium text-[17px] ">
                    Fast & Relable delivery
                  </h3>
                  <p>Get your order on time</p>
                </div>
              </div>

              <div className=" w-89 [box-shadow:0_0_4px_gray] h-28      rounded-2xl flex gap-5 items-center flex-row ">
                <div className="text-6xl text-blue-600 pl-2">
                  <MdOutlineSupportAgent />
                </div>
                <div>
                  <h3 className=" font-medium text-[17px] ">
                    24/7 Customer Support
                  </h3>
                  <p>We're here to help</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second w-full flex flex-col justify-center items-center gap-5 pb-3 md:pb-0 lg:pb-0 ">
            <div className=" flex flex-col gap-4 lg:text-left md:text-left text-center w-full ">
              <h1 className=" text-[#000014] text-2xl md:w-3xl lg:text-5xl font-bold ">
                What Our Customers Say
              </h1>
              <p className="text-blue-500  text-[20px] lg:text-[27px] md:text[20px] ">
                Real poeple, Real experiences.
              </p>
            </div>
            <div className="mon w-full flex flex-col lg:flex-row md:flex-row gap-11 lg:gap-9 md:gap-7">
              <div className=" w-90 md:w-100 lg:w-120 [box-shadow:0_0_3px] shadow-[#b8b6b6] h-42 md:40 lg:h-37      rounded-2xl flex gap-5 items-center flex-row ">
                <div className=" flex flex-col gap-2 text-6xl text-blue-600 pl-2">
               <img src={profi} className=" w-32 h-24 lg:w-30 lg:h-26 rounded-4xl " alt="" />
                  
                </div>
                <div>
                            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                               <p className="text-black font-medium text-[14px] md:text-[16px] lg:text-2xl">Tunda A.</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                  <p className="pr-2">"Great service and authentic products. My iPhone arrived in perfect condition!"</p>
                </div>
              </div>
                    <div className="  w-90 md:w-100 lg:w-120 [box-shadow:0_0_3px] shadow-[#b8b6b6] h-42 md:40 lg:h-37     rounded-2xl flex gap-5 items-center flex-row ">
                <div className=" flex flex-col gap-2 text-6xl text-blue-600 pl-2">
               <img src={prof} className=" w-23 lg:w-23 rounded-4xl " alt="" />
                  
                </div>
                <div>
                            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                               <p className="text-black font-medium text-[14px] md:text-[16px] lg:text-2xl">Blessing O.</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                  <p>"The laptop I bought is exactly as described. Fast delivery too!"</p>
                </div>
              </div>
          
                              <div className=" w-90 md:w-100 lg:w-120 [box-shadow:0_0_3px] shadow-[#b8b6b6] h-42 md:40 lg:h-37    rounded-2xl flex gap-5 items-center flex-row ">
                <div className=" flex flex-col gap-2 text-6xl text-blue-600 pl-2">
               <img src={pro} className=" w-27 lg:w-27 lg:h-28 rounded-4xl " alt="" />
                  
                </div>
                <div>
                            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                               <p className="text-black font-medium text-[14px] md:text-[16px] lg:text-2xl">Joshua H.</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                  <p>"Best prices and excellent customer support. Highly recommended!"</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;

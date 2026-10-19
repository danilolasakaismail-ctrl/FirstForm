// import React from 'react'

import { RiTargetFill } from "react-icons/ri"
import { TfiEye } from "react-icons/tfi"


const Mission = () => {
  return (
    <div className="w-full  min-h-[20vh] justify-center flex items-center">
       <div className="w-[90%] h-[90%] flex items-center justify-center">
            <div className=" w-full flex lg:mb-10 flex-col lg:flex-row md:flex-row justify-center items-center gap-3  lg:gap-9 ">
              <div className=" w-90  lg:w-1/2 h-42 md:40 lg:h-37      rounded-2xl flex gap-5 items-center flex-row ">
                <div className=" flex flex-col gap-2 text-6xl text-blue-600 pl-2">
                  <RiTargetFill />

                </div>
                <div>
                            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                               <p className="text-[24px] font-medium text-blue-600 lg:text-3xl">Our Mission</p>

                            </div>
                  <p className="pr-2">To make quality products accessible to our customers through dependable service, competitive pricing, and a convenient shopping experience.</p>
                </div>
              </div>
              <div className=" lg:flex hidden w-1 h-40 bg-blue-600 ">

              </div>
                          <div className=" lg:hidden h-0.5 w-[90%] bg-blue-600 ">
                </div>
          
                              <div className=" w-90 md:w-100 lg:w-1/2 h-42 md:40 lg:h-37    rounded-2xl flex gap-5 items-center flex-row ">
                <div className=" flex flex-col gap-2 text-6xl text-blue-600 pl-2">
                  <TfiEye />

                </div>
                <div>
                            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                               <p className="text-[24px] font-medium text-blue-600 lg:text-3xl">Our Vision</p>
                            </div>
                  <p>To become a trusted and recognized retail brand known for quality, integrity, customer satisfaction, and innovation.</p>
                </div>
              </div>

            </div>
           

            </div>
    </div>
  )
}

export default Mission
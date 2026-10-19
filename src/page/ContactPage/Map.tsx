// import React from 'react'

// import dami from "../../assets/IMG/minimax-h3-max_b_#_🎬_DAMILOLA_STORES.mp4"
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
// import mon from "../../assets/IMG/Modern Gadget Showcase.png"

const Map = () => {
  return (
    <div className=" w-full min-h-screen   pt-20 pb-20 bg-white flex justify-center items-center ">
      <div className=" w-[90%] h-[90%] flex flex-col-reverse  gap-8 lg:flex-row  md:flex-row">
        <div className="w-1/2   flex flex-col gap-10 ">
          <div className="  lg:w-full md:100 w-90 rounded-3xl flex flex-col gap-4 justify-center items-start pl-10 h-70 lg:h-100 md:h-80 carrier bg-[#EAF4FD]">
            <div className=" flex items-center justify-center gap-5">
              <div className="text-2xl lg:text-4xl md:text-3xl">
                <IoCallOutline />
              </div>
              <div className="">
                <h1 className="font-bold text-[18px] lg:text-[24px] md:text-[22px]">
                  Call Us
                </h1>
                <p className="font-medium text-[14px] lg:text-[18px] md:text-[17px] text-[#000000a9]">
                  +234 801 234 2930
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] md:text-[17px] text-[#000000a9]">
                  Mon - Sat, BAM - 8PM
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-5">
              <div className="text-2xl lg:text-4xl md:text-3xl">
                <MdOutlineEmail />
              </div>
              <div className="">
                <h1 className="font-bold text-[18px] lg:text-[24px] md:text-[22px]">
                  Email
                </h1>
                <p className="font-medium text-[14px] lg:text-[18px] md:text-[17px] text-[#000000a9]">
                  damilolasakaismail@gmail.com
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] md:text-[17px] text-[#000000a9]">
                  We reply within 24 hours
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-5">
              <div className="text-2xl lg:text-4xl md:text-3xl">
                <SlLocationPin />
              </div>
              <div className="">
                <h1 className="font-bold text-[18px] lg:text-[24px] md:text-[22px]">
                  Visit Our Store
                </h1>
                <p className="font-medium text-[14px] lg:text-[18px] md:text-[17px] text-[#000000a9]">
                  No 46 Ikingishin street, Ado-Ekiti
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:w-full md:w-100 w-90 rounded-3xl flex flex-col gap-4 justify-center lg:items-start md:items-start items-center pl-0   h-200 lg:h-200 md:h-200 carrier bg-[#F8F9F9]">
            <h2 className=" font-bold text-[24px] lg:pl-10 md:pl-4 md:text-2xl text-center lg:text-left md:text-left lg:text-3xl">
              Send Us a Message
            </h2>
            <p className=" text-[20px] text-center lg:pl-10 md:pl-4 lg:text-left md:text-left">
              Fill out the form below and we'll get back to you shorty.
            </p>
            <div className="w-full flex flex-col gap-6 justify-center items-center">
              <div className=" lg:w-150 w-70 md:w-100 flex flex-col justify-center items-start gap-2 ">
                <p className="font-medium md:text-[22px] lg:text-[22px]">
                  Full Name{" "}
                  <span style={{ color: "red", font: "bold" }}>*</span>
                </p>
                <input
                  className="  border-2 w-full border-[#80808075] h-13 pl-2 rounded-[7px] border-solid "
                  type="text"
                  placeholder="Enter Your full Name"
                />
              </div>
              <div className=" lg:w-150 w-70 md:w-100 flex flex-col justify-center items-start gap-2 ">
                <p className="font-medium md:text-[22px] lg:text-[22px]">
                  Email address{" "}
                  <span style={{ color: "red", font: "bold" }}>*</span>
                </p>
                <input
                  className="  border-2 w-full border-[#80808075] h-13 pl-2 rounded-[7px] border-solid "
                  type="email"
                  placeholder="Enter Your email address"
                />
              </div>
              <div className=" lg:w-150 w-70 md:w-100 flex flex-col justify-center items-start gap-2 ">
                <p className="font-medium md:text-[22px] lg:text-[22px]">
                  {" "}
                  Select What you want{" "}
                  <span style={{ color: "red", font: "bold" }}>*</span>
                </p>
                <select className="  border-2 w-full border-[#80808075] h-13 pl-3 rounded-[7px] border-solid ">
                  <option value="">Select a Phone or Laptop</option>
                  <option value="phone"> Phone</option>
                  <option value="Laptop"> Laptop</option>
                  <option value="acceessories"> Accessories</option>
                </select>
              </div>
              <div className=" lg:w-150 w-70 md:w-100 flex flex-col justify-center items-start gap-2 ">
                <p className="font-medium md:text-[22px] lg:text-[22px]">
                  Message <span style={{ color: "red", font: "bold" }}>*</span>
                </p>
                <textarea
                  name="message"
                  className=" lg:w-150 md:w-100 border-2 w-full border-[#80808075] h-30 pl-3 rounded-[7px] border-solid"
                  id=""
                ></textarea>
              </div>
              <button className=" md:text-[22px] lg:text-[22px] h-13 lg:w-150 bg-[#006DFD] text-center w-70 md:w-100 text-white font-medium text-[18px] rounded-[7px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center lg:justify-start lg:items-start lg:w-1/2 md:w-1/2 lg:sticky lg:space-y-8  lg:top-30 lg:h-140 ">
          <video
            autoPlay
            muted
            loop
            playsInline
            // poster={mon}
            className=" inset-0 h-90 rounded-2xl lg:h-130 w-full object-cover" src="/dami.mp4" typeof="video/mp4" />
           
         
        </div>
      </div>
    </div>
  );
};

export default Map;

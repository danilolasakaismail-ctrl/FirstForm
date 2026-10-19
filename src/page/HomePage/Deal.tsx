// import React from 'react'
import { CgArrowRight } from "react-icons/cg";
import big from "../../assets/IMG/allbig.png"
import { NavLink } from "react-router-dom";



const Deal = () => {
  return <div className="  w-full min-h-[50vh] bg-[#E9F4FD]  flex justify-center items-center ">
    <div className=" w-[90%] h-[90%] md:w-[99%] lg:w-[90%] flex flex-col-reverse gap-7 lg:flex-row md:flex-row justify-between items-center ">
      <div className=" flex-col flex justify-center items-center md:items-start lg:items-start gap-3">
        <p className=" text-[20px] lg:text-[24px] font-medium text-blue-500 ">Upgrade Your Tech</p>
        <h1 className=" font-bold text-2xl lg:text-5xl text-center lg:text-left md:text-left ">Big Deals. Bigger Savings.</h1>
        <p className="text-blue-500 text-[14px] text-center lg:text-left md:text-left ">prices on phones, laptops and accessories.</p>
        <NavLink to="/shop">
        <button className=" h-10 lg:h-14 flex items-center w-[90%] lg:w-54 justify-center gap-7.5 bg-[black] lg:p-5 rounded-4xl lg:pl-10 lg:mb-8 lg:pr-10 cursor-pointer  text-white font-medium">
              <p>  Shop Deals </p><CgArrowRight className=" text-white text-2xl"/>
              </button>
              </NavLink>
</div>
      <div>
        <img src={big} alt="" />
      </div>
    </div>
  </div>;
};

export default Deal;

// import React from 'react'

import { GoStarFill } from "react-icons/go"
import iphone from "../../assets/IMG/iphone.png"
import samsung from "../../assets/IMG/samsung.png"
import mark from "../../assets/IMG/macBook.png"
import lev from "../../assets/IMG/lenovo.png"
import pho from "../../assets/IMG/pho.png"
import ipho from "../../assets/IMG/ipho.png"
import asus from "../../assets/IMG/asus.png"
import dell from "../../assets/IMG/dell.png"
import lqq from "../../assets/IMG/levv.png"
import hp from "../../assets/IMG/hpp.png"
import app from "../../assets/IMG/app.png"
import pol from "../../assets/IMG/asses.png"
import col from "../../assets/IMG/col.png"
import ari from "../../assets/IMG/ari.png"
import pod from "../../assets/IMG/pod.png"


const Hero = () => {
  return (
 <div className=" w-full min-h-screen pb-10 lg:min-h-[70vh] flex justify-center items-center">

        <div className=" w-[90%] h-[90%] lg:w-[90%] md:w-[99%] flex flex-col  items-center gap-7 ">
        <div className=" flex flex-col gap-4 lg:text-left md:text-left text-center w-full ">
        <h1 className=" text-[#000014] text-2xl md:w-3xl lg:text-5xl font-bold ">Features Products</h1>
        <p className=" text-blue-500 text-[20px] lg:text-[27px] md:text[20px] ">Top Picks, handpicked for you</p>
      </div>

      <div  className=" grid grid-cols-1 lg:grid-cols-4 gap-11 md:gap-8 lg:gap-7.5" >
        <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={iphone} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left md:text-2xl text-2xl lg:text-2xl font-medium ">Iphone 15 Pro</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(134)</p>
            </div>
            
            <p className=" text-black font-medium ">$999 <span className="text-[#9EA1AA]">$1,199</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
        </div>

                <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={samsung} className=" w-33   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Samsung Galaxy S24</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(58)</p>
            </div>
            
            <p className=" text-black font-medium ">$849 <span className="text-[#9EA1AA]">$1,099</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
        </div>
                        <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={mark} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">MackBook Air M2</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(78)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,099 <span className="text-[#9EA1AA]">$1,399</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
        </div>
                               <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={lev} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Lenovo Legion 5</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(79)</p>
            </div>
            
            <p className=" text-black font-medium ">$899 <span className="text-[#9EA1AA]">$1,199</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
        </div>
                                       <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={pho} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Iphone 18</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(78)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,011 <span className="text-[#9EA1AA]">$1,199</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
        </div>
                                               <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={ipho} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Iphone 16</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(87)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,011 <span className="text-[#9EA1AA]">$1,199</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                                     <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={asus} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Asus ROG</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(94)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,011 <span className="text-[#9EA1AA]">$1,199</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                      <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={dell} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Dell Pro</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(100)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,211 <span className="text-[#9EA1AA]">$1,399</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                  <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={lqq} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Lenovo LQQ</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(48)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,111 <span className="text-[#9EA1AA]">$1,399</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                  <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={hp} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Hp Pro</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(91)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,091 <span className="text-[#9EA1AA]">$1,099</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                  <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={app} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Apple Mac</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(101)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,022 <span className="text-[#9EA1AA]">$1,299</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                              <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={pol} className=" w-39 h-44  lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Rongke Polo</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(124)</p>
            </div>
            
            <p className=" text-black font-medium ">$490 <span className="text-[#9EA1AA]">$799</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                  <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={col} className=" w-34 h-44  lg:h-50  md:w-50 lg:w-40 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Colvin</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(98)</p>
            </div>
            
            <p className=" text-black font-medium ">$992 <span className="text-[#9EA1AA]">$1,099</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                  <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={ari} className=" w-39   lg:h-50  md:w-50 lg:w-70 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Braclet</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(88)</p>
            </div>
            
            <p className=" text-black font-medium ">$481 <span className="text-[#9EA1AA]">$799</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>
                                  <div className=" w-80 lg:w-85 md:w-80 bg-[#F4F5F7] rounded-2xl flex flex-col justify-center items-center text-left h-80 lg:h-95 gap-2 ">
            <img src={pod} className=" w-39   lg:h-50  md:w-50 lg:w-50 " alt="" />
            <div className=" w-[80%] lg:w-[90%] ">
            <p  className=" text-[#000014] w-[70%] md:w-[80%] lg:w-[80%] text-left  font-medium md:text-2xl text-2xl lg:text-2xl ">Air Pods</p>
            <div className=" flex items-center gap-1 text-yellow-500 text-[12px] md:text-[14px] lg:text-[16px]">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <p className="text-[#9EA1AA] text-[14px] md:text-[16px] lg:text-2xl">(48)</p>
            </div>
            
            <p className=" text-black font-medium ">$1,072 <span className="text-[#9EA1AA]">$1,299</span></p>
            </div>
            <button className="lg:w-78 w-70 h-9 rounded-3xl font-medium lg:h-13 text-white bg-blue-800 hover:bg-blue-400 hover:animate-bounce ">Add to Cart</button>
            </div>


      </div>
        </div>
    </div>
  );
  
  
}

export default Hero
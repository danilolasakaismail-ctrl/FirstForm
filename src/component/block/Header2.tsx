import React from 'react'
// import { useState } from "react"
import dam from "../../assets/IMG/AJdf4-removebg-preview.png"
import { MdCancel, MdOutlineMenu } from 'react-icons/md'

const Header2 = () => {
    const [dropDown, setDropdown] = React.useState(false)

    const showDropdown= () =>{
        setDropdown(!dropDown)
    }
  return (
    
    <div className=" w-full h-23 bg-[#061325] flex justify-center items-center ">
        <div className=" lg:w-[90%] w-[90%] h-[90% flex justify-between items-center ">
        <div className="">
        <img src={dam} className="lg:w-55 w-34 md:w-40  "  alt="" />
        </div>
        <div className=" hidden lg:flex items-center gap-10 text-white font-medium text-2xl">
        <h4>Home</h4>
               
        <h4>About</h4>
        <h4>Contact</h4>
        </div>
        {
            dropDown ?(
                <div className='text-[30px] text-white lg:hidden flex flex-col' onClick={showDropdown}>
                     <MdCancel />
                </div>
            ):
            (
                <div className='text-[30px] text-white lg:hidden' onClick={showDropdown}>
                    <MdOutlineMenu/>

                </div>
            )
        }
        {
            dropDown ?(
                <div className=' text-white  w-screen bg-amber-500 h-full flex flex-col gap-3 '>

                     <h4>Home</h4>
                     <h4>About</h4>
                     <h4>Contact</h4>
                </div>
            )
            :
            null
        }
        </div>
    </div>
  )
}

export default Header2
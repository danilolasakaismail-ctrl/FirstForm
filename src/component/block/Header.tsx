import  { useState } from 'react'
// import { useState } from "react"
import dam from "../../assets/IMG/AJdf4-removebg-preview.png"
import { MdCancel, MdOutlineMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [show, setShow] = useState<boolean | null>(null)

    const  dropdown= () =>{
        setShow(!show)
    }
  return (
    
    <div className=" w-full h-23 bg-[#061325] z-50 flex justify-center items-center  fixed ">
        <div className=" lg:w-[90%] w-[90%] flex justify-between items-center ">
        <div className="">
        <img src={dam} className="lg:w-55 w-34 md:w-40  "  alt="" />
        </div>
        <div className=" hidden lg:flex items-center gap-10 text-white font-medium text-2xl">
             <NavLink to="/">
                 <h4>Home</h4>
                </NavLink>  
      
           <NavLink to="/about">
               <h4>About</h4>
                </NavLink>  
             <NavLink to="/shop">
               <h4>Product</h4>
                </NavLink>  
                <NavLink to="/contact">
               <h4>Contact</h4>
                </NavLink>  
     
        
        </div>
        <div className='lg:hidden'>
        {
            show ?(
                <div className='text-[30px] text-white  flex flex-col' onClick={dropdown}>
                     <MdCancel />
                </div>
            ):
            (
                <div className='text-[30px] text-white' onClick={dropdown}>
                    <MdOutlineMenu/>

                </div>
            )
        }
        {
            show ?(
                <div className=' w-full h-70 absolute right-0 top-17 text-2xl bg-amber-900 flex  text-white flex-col gap-5 p-5'>

                <NavLink to="/">
                 <h4>Home</h4>
                </NavLink>  
             <NavLink to="/about">
               <h4>About</h4>
                </NavLink> 
                 <NavLink to="/shop">
               <h4>Product</h4>
                </NavLink>   
             <NavLink to="/contact">
               <h4>Contact</h4>
                </NavLink>  
     
                </div>
            )
            :
            null
        }
        </div>
        </div>
    </div>
  )
}

export default Header
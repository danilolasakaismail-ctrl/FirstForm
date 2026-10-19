// import React from 'react'

import { BiSearch } from "react-icons/bi"

const Text = () => {
  return (
    <div className=" w-full h-70 flex items-center justify-center">
        <div className=" w-[90%] h-[70%] lg:h-[90%]  flex lg:flex-row flex-col lg:gap-0 gap-3 items-end justify-end lg:items-center lg:justify-between">
            <div></div>
            <div>
            <div className="flex items-center gap-3 border border-solid border-blue-600 h-10 pl-2 rounded-sm"><input type="search" className=" outline-0 border-0" />
            <BiSearch className="text-3xl text-blue-500 "/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Text
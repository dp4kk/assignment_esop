import React from 'react'
import { FaChevronUp } from "react-icons/fa";

const Totop = ({isScrolled}) => {
  return (
    <div className={` fixed right-[20px] bottom-[10px] bg-[#c19753] text-sm w-10 h-10 rounded-full text-center z-10     ${isScrolled? 'opacity-100':'opacity-0'} cursor-pointer transition-all duration-300 ease-in-out text-white hover:bg-[#242d69] `}
    onClick={()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }}>
    <div className='w-full h-full flex justify-center items-center'>
    <FaChevronUp/>
    </div>
    </div>
  )
}

export default Totop
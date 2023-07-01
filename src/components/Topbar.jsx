import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png' 
import { FaFileSignature } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
const Topbar = () => {

  const [isScrolled,setIsScrolled]=useState(false)
 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 0);
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);



  return (
    <div
      className={`w-full ${
        isScrolled ? "bg-white" : "bg-transparent"
      } fixed top-0 px-6 flex justify-between items-center z-50 transition-all duration-300 ease-in-out `}
    >
      <div className={`bg-clip-custom  ${isScrolled ?'w-[140px]' :'w-[240px]'} relative min-h-1 flex items-center justify-center z-1 transition-all duration-300 ease-in-out`}>
        <a href="#" className="">
          <img
            src={logo}
            alt="IHS"
            className="py-[5px] pr-[10px] pl-0 transition-all "
          />
        </a>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <button
            className={`bg-transparent ${
              isScrolled ? "text-black" : "text-white"
            } py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 ${
              isScrolled ? "border-black" : "border-white"
            } border-opacity-30  mx-[5px] transition-all duration-300 ease-in-out hover:bg-white hover:text-black  z-10 font-semibold`}
          >
            Student Login
          </button>
          <button
            className={`bg-transparent ${
              isScrolled ? "text-black" : "text-white"
            } py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 ${
              isScrolled ? "border-black" : "border-white"
            } border-opacity-30  mx-[5px] transition-all duration-300 ease-in-out hover:bg-white hover:text-black  z-10 font-semibold`}
          >
            Admission Query
          </button>
          <button className={`bg-transparent ${isScrolled?'text-black':'text-white'} py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 ${isScrolled?'border-black':'border-white'} border-opacity-30  mx-[5px] transition-all duration-300 ease-in-out hover:bg-white hover:text-black  z-10 font-semibold`}>
            <div className="flex items-center">
              <FaFileSignature /> Apply Now
            </div>
          </button>
          <div className={`mx-[5px] flex justify-center items-center hover:cursor-pointer  ${isScrolled?'text-black':'text-white'}`}>
            Menu
            <AiOutlineMenu className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar
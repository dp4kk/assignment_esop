import React from 'react'
import logo from '../assets/images/logo.png' 

const Topbar = () => {
  return (
    <div className="w-full fixed top-0 px-6 flex justify-between items-center z-50 transition-all duration-300 ease-in-out">
      <div className="w-240px relative min-h-1 flex items-center justify-center z-1 transition-all duration-300 ease-in-out">
        <a
          href="#"
          className=""
        >
          <img src={logo} alt="IHS" />
        </a>
      </div>
      <div>
        <div>
          <button className="bg-transparent text-black py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 border-black border-opacity-30  mx-5 transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            Student Login
          </button>
          <button className="bg-transparent text-black py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 border-black border-opacity-30 transition-all duration-300 ease-in-out mx-5">
            Admission Query
          </button>
          <button className="bg-transparent text-black py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 border-black border-opacity-30 transition-all duration-300 ease-in-out mx-5">
            Apply Now
          </button>
          <button className="bg-transparent text-black py-2 px-4 text-sm rounded-full relative overflow-hidden border-2 border-black border-opacity-30 transition-all duration-300 ease-in-out mx-5">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar
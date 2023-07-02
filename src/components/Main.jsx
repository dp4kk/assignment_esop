import React, { useEffect, useState } from 'react'
import banner01 from '../assets/images/banner1.jpg'
import banner02 from '../assets/images/banner2.jpg'
import banner03 from '../assets/images/banner3.jpg'
import banner04 from '../assets/images/banner4.jpg'
import banner05 from '../assets/images/banner5.jpg'


const carouselItems = [
  {
    id: 1,
    image: banner01,
  },
  {
    id: 2,
    image: banner02,
  },
  {
    id: 3,
    image: banner03,
  },
  {
    id: 4,
    image: banner04,
  },
  {
    id: 5,
    image: banner05,
  },
];

const Main = () => {
    const [activeIndex,setActiveIndex]=useState(0)
    const [showText,setShowText] =useState(true)
    useEffect(()=>{
        const timer=setInterval(()=>{
           setActiveIndex(prevIndex=>( prevIndex + 1) % carouselItems.length )
        },5000)
        return()=>{
            clearInterval(timer)
        }
    },[])

   
  useEffect(() => {
    const interval = setInterval(
      () => {
        setShowText((prevValue) => !prevValue);
      },
      showText ? 5000 : 1
    );

    return () => {
      clearInterval(interval);
    };
  }, [showText]);


  return (
    <div className="md:h-screen relative">
      <div className="relative w-full overflow-hidden h-full">
        <div className="h-full  relative">
          <div className="relative">
            <img
              src={carouselItems[activeIndex].image}
              alt="banner"
              className="z-0 animate-zoom-in scale-100 transition-transform duration-200 ease-in-out "
            />
            {showText && (
              <div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 text-center transition-all duration-500 ease-linear delay-500 z-10 ">
                <div className="animate-slide-up">
                  <p className="text-white text-base md:text-3xl">
                    Best School in New Gurgaon
                  </p>
                  <p className="text-white text-3xl md:text-6xl uppercase">
                    Imperial Heritage School
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="fixed flex   bottom-[20px] right-[30px]">
            <div className="flex items-center flex-row justify-between z-10">
              <ul className="static flex items-center mr-[10px] ml-0">
                <li
                  onClick={() => setActiveIndex(0)}
                  className="width-auto height-auto bg-transparent opacity-100 text-white mx-[10px] text-indent-inherit border-t-0 border-b-0 font-semibold text-xs hover:cursor-pointer hover:underline"
                >
                  01
                </li>
                <li
                  onClick={() => setActiveIndex(1)}
                  className="width-auto height-auto bg-transparent opacity-100 text-white mx-[10px] text-indent-inherit border-t-0 border-b-0 font-semibold text-xs hover:cursor-pointer hover:underline"
                >
                  02
                </li>
                <li
                  onClick={() => setActiveIndex(2)}
                  className="width-auto height-auto bg-transparent opacity-100 text-white mx-[10px] text-indent-inherit border-t-0 border-b-0 font-semibold text-xs hover:cursor-pointer hover:underline"
                >
                  03
                </li>
                <li
                  onClick={() => setActiveIndex(3)}
                  className="width-auto height-auto bg-transparent opacity-100 text-white mx-[10px] text-indent-inherit border-t-0 border-b-0 font-semibold text-xs hover:cursor-pointer hover:underline"
                >
                  04
                </li>
                <li
                  onClick={() => setActiveIndex(4)}
                  className="width-auto height-auto bg-transparent opacity-100 text-white mx-[10px] text-indent-inherit border-t-0 border-b-0 font-semibold text-xs hover:cursor-pointer hover:underline"
                >
                  05
                </li>
              </ul>
              <div className="flex items-center text-center">
                <span className="w-[100px] mr-1 border-b"></span>
                <a
                  className="flex items-center justify-center text-white text-center hover:cursor-pointer"
                  onClick={() => setActiveIndex((prev)=>prev===0?4:prev-1)}
                >
                  <span className="inline-block  w-[40px] [h-40px]">＜</span>
                </a>
                <a
                  className=" flex items-center justify-center text-white text-center fill-white hover:cursor-pointer "
                  onClick={() => setActiveIndex((prev) =>prev===4?0: prev + 1)}
                >
                  <span className="inline-block  w-[40px] [h-40px]">＞</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
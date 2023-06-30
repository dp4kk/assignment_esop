import React, { useState } from "react";
import image01 from "../assets/images/news1.jpg";
import image02 from "../assets/images/news2.jpg";
import image03 from "../assets/images/news3.jpg";
import image04 from "../assets/images/news4.jpg";
import image05 from "../assets/images/news5.jpg";
import image06 from "../assets/images/news6.jpg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const carouselImages = [
  {
    id: 1,
    image: image02,
    name: "Pariksha Pe Charcha 2023",
  },
  {
    id: 2,
    image: image03,
    name: "World Robotics Olympiad",
  },
  {
    id: 3,
    image: image04,
    name: "2nd Annual day",
  },
  {
    id: 4,
    image: image05,
    name: "Global community meet",
  },
  {
    id: 5,
    image: image06,
    name: "Diwali Assembly",
  },
];

const importantDates = [
  { id: 1, date: "06", event: "Colour Burst (Pre Primary)" },
  { id: 2, date: "14", event: "World Computer Day (Grades I-IV)" },
  { id: 3, date: "18", event: "Shivratri" },
  { id: 4, date: "23", event: "Theme Craft (Pre Primary) Preparatory Leave" },
  { id: 5, date: "24", event: "Preparatory Leave (Grade V-IX)" },
  { id: 6, date: "27", event: "Preparatory Leave (Grade V-IX)" },
  { id: 7, date: "28", event: "Preparatory Leave (Grade V-IX)" },
];

const Happenings = () => {
  const [carouselItems, setCarouselItems] = useState(carouselImages);

  const handleNext = () => {
    setCarouselItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setCarouselItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, prevItems.length - 1),
    ]);
  };

  return (
    <div className="w-full my-24 relative overflow-hidden">
      <div className="max-w-[1240px] border-solid   px-4 mx-auto">
        <div className="flex flex-wrap mx-[-15px] sm:flex-col md:flex-row relative">
          <div className="w-4/5 px-2 sm:w-4/5 md:w-2/3 mx-auto">
            <div>
              <div className="flex justify-between">
                <p className="text-4xl mb-0">Latest Happenings</p>
                <p className="text-base font-bold hover:cursor-pointer hover:text-[#c19763]">View all</p>
              </div>
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-2/5 relative px-4 pt-1">
                  <img src={image01} alt="students" />
                </div>
                <div className="w-3/5 relative px-4">
                  <div>
                    <p className="text-2xl mb-2 font-semibold">
                      <a>Heritage Transport Museum</a>
                    </p>
                    <p className="mb-4 leading-[1.75]">
                      All the world is a laboratory to the inquiring mind.” ~
                      Martin Fisher
                    </p>
                    <div>
                      <a className="text-md font-bold hover:text-[#c19753] group hover:cursor-pointer">
                        Learn more <span className="font-bold text-lg group-hover:pl-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-8 pt-8 border-t border-dashed border-gray-200 flex  transition-all duration-300 ease-in-out ">
                {carouselItems.slice(0, 3).map((items) => {
                  return (
                    <div key={items.id} className="px-2 hover:cursor-pointer">
                      <img src={items.image} alt="image" />
                      <p className="mb-4 mt-0 leading-7 hover:underline">
                        {items.name}
                      </p>
                    </div>
                  );
                })}
                <button
                  className="absolute left-8 top-[40%]"
                  onClick={() => handlePrev()}
                >
                  <div className="w-[50px] h-[50px] bg-white border border-[#C19753] rounded-full flex justify-center items-center   transition-all duration-300 ease-in-out hover:w-[60px] hover:h-[60px] hover:bg-[#C19753]">
                    <FiArrowLeft className="text-2xl " />
                  </div>
                </button>
                <button
                  className="absolute right-8 top-[40%]"
                  onClick={() => handleNext()}
                >
                  <div className="w-[50px] h-[50px] bg-white border border-[#C19753] rounded-full flex justify-center items-center   transition-all duration-300 ease-in-out hover:w-[60px] hover:h-[60px] hover:bg-[#C19753]">
                    <FiArrowRight className="text-2xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-4/5 relative px-4 md:w-1/3 sm:w-4/5 mx-auto">
            <div className="h-full p-8 grid grid-rows-[auto,440px,auto] bg-[#e4ece9] ">
              <div>
                <h className="text-2xl font-medium">Important Dates</h>
              </div>
              <div className="pt-2">
                <ul className="h-full overflow-auto pl-0 my-0 space-y-4  scrollbar-thumb-[#c19753] scrollbar-thin scrollbar-track-gray-300">
                  {importantDates.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex items-center gap-3 pb-4 mb-4 border-b border-dashed border-gray-300"
                      >
                        <div className="flex flex-shrink-0 max-w-[70px] flex-col items-center p-2 bg-white text-base font-semibold">
                          <span className="text-3xl font-bold text-[#c19753]">
                            {item.date}
                            <sup>th</sup>
                          </span>
                          Feb'23
                        </div>
                        <p className="mb-0 leading-7">{item.event}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full mt-8">
                <a className="relative z-1 flex items-center gap-[10px] px-[15px] py-[10px] min-w-[125px] max-w-max h-[42px]    rounded-full text-primary-color bg-transparent border border-[#242d69] text-center transition duration-300 ease-in-out group hover:text-white hover:bg-[#242d69] hover:cursor-pointer">
                  View School Planner
                  <div className=" bg-[#c19753] w-8 h-8 rounded-full group-hover:translate-x-4 group-hover:w-10 group-hover:h-10 flex justify-center items-center">
                    <span className=" text-white ">→</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happenings;

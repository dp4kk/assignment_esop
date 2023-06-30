import React from "react";
import image from "../assets/images/overview-img.jpg";
const Welcome = () => {
  return (
    <div className="w-full relative py-24 overflow-hidden">
      <div className="max-w-[1240px] px-4 mx-auto">
        <div className="flex items-center  flex-wrap sm:flex-col overflow-visible md:flex-row-reverse lg:flex-row ">
          <div className="relative lg:w-3/5 md:w-2/5 sm:px-10 box-border bg-[#242d69]">
            <img src={image} alt="school" className="mt-[-40px] mb-[40px] ml-[40px]" />
          </div>
          <div className="relative lg:w-2/5 md:w-3/5 sm:4/5 bg-white">
            <div className="py-0 px-8">
              <div className="relative mb-8">
                <h2 className="mb-0 text-[#242d69] text-4xl  ">
                  Welcoming, Imperial Heritage School
                </h2>
              </div>
              <p className="text-lg mb-4">
                At{" "}
                <span className="text-[#c19753] italic">
                  Imperial Heritage School
                </span>
                , we always strive to present our students with high quality
                education that helps to forge an understanding that strengthens
                bonds across languages and cultures, across borders and social
                chasms.
              </p>
              <p className="text-lg mb-4">
                Our efforts help to foster top quality learning by presenting
                best educational environment to satisfy the needs of ever-eager
                children.
              </p>
              <div className="mt-8 w-full">
                <a className="relative z-1 flex items-center gap-[10px] px-[15px] py-[10px] min-w-[125px] max-w-max h-[42px]    rounded-full text-primary-color bg-transparent border border-[#242d69] text-center transition duration-300 ease-in-out group hover:text-white hover:bg-[#242d69] ">
                  Learn more
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

export default Welcome;

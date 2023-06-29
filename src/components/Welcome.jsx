import React from "react";
import image from "../assets/images/overview-img.jpg";
const Welcome = () => {
  return (
    <div className="w-full relative py-24 overflow-hidden">
      <div className="max-w-[1240px] px-4 mx-auto">
        <div className="flex items-center flex-wrap mx-[-15px]">
          <div className="relative w-3/5">
            <img src={image} alt="school" />
          </div>
          <div className="relative w-2/5">
            <div className="py-0 px-8">
              <div className="relative mb-8">
                <h2 className="mb-0 text-[#242d69] text-4xl">
                  Welcoming, Imperial Heritage School
                </h2>
              </div>
              <p className="text-lg mb-4">
                At{" "}
                <e className="text-[#c19753] italic">
                  Imperial Heritage School
                </e>
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
                <a className="relative z-1 flex items-center gap-[10px] px-[15px] py-[10px] min-w-[130px] max-w-max rounded-full text-primary-color bg-transparent border border-[#242d69] text-center transition duration-300 ease-in-out">
                Learn more
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

import React from "react";
import one from "../assets/images/logo-isa22.jpg";
import two from "../assets/images/eco-biodiversity.jpg";
import three from "../assets/images/eco-energy.jpg";
import four from "../assets/images/eco-waste.jpg";
import five from "../assets/images/afs.jpg";
import six from "../assets/images/CEE-logo-320th.jpg";
import seven from "../assets/images/logo-interclub.jpg";
import eight from "../assets/images/FEE-Eco-School.jpg";
import nine from "../assets/images/htc-sports.jpg";
import ten from "../assets/images/kcci-logo.jpg";
import eleven from "../assets/images/logo-admissionz.jpg";
import twelve from "../assets/images/logo-champion.jpg";
import thirteen from "../assets/images/logo-cms-vatavran1.jpg";
import forteen from "../assets/images/logo-cse.jpg";
import fifteen from "../assets/images/logo-edu-media.jpg";
import sixteen from "../assets/images/logo-educomp.jpg";
import seventeen from "../assets/images/logo-paryavaran.jpg";
import eighteen from "../assets/images/logo-space.jpg";
import nineteen from "../assets/images/logo-univariety.jpg";
import school from "../assets/images/overview-img.jpg"
import { BsPlayCircleFill } from "react-icons/bs";
const collab = [
  {
    id: 1,
    logo: one,
  },
  {
    id: 2,
    logo: two,
  },
  {
    id: 3,
    logo: three,
  },
  {
    id: 4,
    logo: four,
  },
  {
    id: 5,
    logo: five,
  },
  {
    id: 6,
    logo: six,
  },
  {
    id: 7,
    logo: seven,
  },
  {
    id: 8,
    logo: eight,
  },
  {
    id: 9,
    logo: nine,
  },
  {
    id: 10,
    logo: ten,
  },
  {
    id: 11,
    logo: eleven,
  },
  {
    id: 12,
    logo: twelve,
  },
  {
    id: 13,
    logo: thirteen,
  },
  {
    id: 14,
    logo: forteen,
  },
  {
    id: 15,
    logo: fifteen,
  },
  {
    id: 16,
    logo: sixteen,
  },
  {
    id: 17,
    logo: seventeen,
  },
  {
    id: 18,
    logo: eighteen,
  },
  {
    id: 19,
    logo: nineteen,
  },
];

const Collaboration = () => {
  return (
    <div className="py-24 bg-[#242d69] w-full relative overflow-hidden">
      <div className=" lg:max-w-[1240px] md:max-w-[720px] sm:max-w-[540px] px-4 mx-auto">
        <div className="flex flex-wrap justify-between ">
          <div className="relative px-4  ">
            <div className="relative mb-8">
              <h1 className="text-white text-3xl">In Collaboration With</h1>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2">
              {collab.map((item) => {
                return (
                  <div key={item.id} className="w-[111px] h-[60px]">
                    <img src={item.logo} alt="image" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative px-4 w-2/5 min-w-[490px]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-white text-3xl">Videos</h1>
              </div>
              <div>
                <h1 className="text-white">View all</h1>
              </div>
            </div>
            <div className="relative">
              <img src={school} alt="school" />
              <div className="w-12 h-12 cursor-pointer rounded-full bg-white  absolute top-[40%] left-[45%] text-[#C19753]  hover:text-[#242D69] ">
                <BsPlayCircleFill
                  className="w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;

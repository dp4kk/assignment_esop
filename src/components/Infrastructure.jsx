import React from 'react'
import canteen from '../assets/icons/canteen.png'
import cctv from "../assets/icons/cctv.png";
import classroom from "../assets/icons/classroom.png";
import lab from "../assets/icons/lab.png";
import laboratory from "../assets/icons/laboratory.png";
import library from "../assets/icons/library.png";
import playground from "../assets/icons/playground.png";
import school from "../assets/icons/school.png";
import transport from "../assets/icons/transport.png";
import infirmary from '../assets/icons/infirmary.png'
import backgroundImage from '../assets/images/ganesha.jpg'
const infrastructures=[
    {
        id:1,
    name:'School building',
    icon:school},
    {
        id:2,
        name:'Smart class',
        icon:classroom
    },
    {
        id:3,
        name:'Laboratory',
        icon:laboratory
    },
    {
        id:4,
        name:'Computer Lab',
        icon:lab
    },
    {
        id:5,
        name:'Library',
        icon:library
    },
    {
        id:6,
        name:'Safety & Security',
        icon:cctv
    },
    {
        id:7,
        name:'Canteen',
        icon:canteen
    },
    {
        id:8,
        name:'Playground',
        icon:playground
    },
    {
        id:9,
        name:'Infirmary',
        icon:infirmary
    },
    {
        id:10,
        name:'Transport',
        icon:transport
    }
]

const Infrastructure = () => {
  return (
    <div className="bg-[url('https://ecorp.co.in/educations/ihs/images/ganesha.jpg')] bg-center bg-cover bg-no-repeat absolute w-full h-screen py-24 inset-0 ">
      <div className="text-center mb-8 ">
        <p className="text-white text-4xl font-semibold">Infrastructure</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-items-center items-center ">
        {infrastructures.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[280px]  flex justify-center py-10 group hover:bg-white "
            >
              <div className="text-white text-center group-hover:text-black">
                <img
                  src={item.icon}
                  className="invert w-[60px] p-15 mx-auto mb-[10px] filter brightness-55 transition-all duration-300 ease-in-out group-hover:invert-0"
                />
                <span className="uppercase">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Infrastructure
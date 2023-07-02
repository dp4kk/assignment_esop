import React from 'react'
import footerLogo from '../assets/images/footer-logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const footerItems=[
    {
        id:1,
        title:'ABOUT US',
        subtitles:['About School','Management','School Staff',"Principal's Message"]
    },
    {
        id:2,
        title:'INFRASTRUCTURE',
        subtitles:['School Building','Safety & Security','Smart Class','Library','Fine Arts','Robotics Lab', 'Laboratory','Computer Lab','Dance Room', 'Music Room']
    },
    {
        id:3,
        title: 'ACADEMICS',
        subtitles:['Student Council', 'Pre-Primary Years','Primary Years','Middle Years','Senior School','Teaching Methodology','IT Vision / E-Learning','Holiday Homework']
    },
    {
        id:4,
        title:'ADMISSION',
        subtitles:['Procedure','Admission Query', 'Online Enquiry Form', 'Fee Structure/Fee Policy', 'Prospectus','FAQ']
    }
]
const footerItemCBSE = [
  {
    id: 1,
    title: "CBSE",
    subtitles: [
      "Mandatory Public Disclosure",
      "Academics",
      "School Management Committee",
      "Staff Details",
      "Book List",
      "Annual Report",
      
    ],
  },
  {
    id: 2,
    title: "",
    subtitles: [
      "Student Strength",
      "Academic Calendar",
      "Subjects Offered",
      "Workshop Participation Details",
      "Declaration",
      "Transfer Certificate",
      "Reinforcement Policy",
    ],
  },
];
const Footer = () => {
  return (
    <>
      <footer className="w-full  relative bg-black text-white z-1 py-24">
        <div className="w-160px absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="w-full px-12 mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 mx-12 my-4">
            {footerItems.map((footerItem) => {
              return (
                <div className="w-[310px]" key={footerItem.id}>
                  <div className="text-base">
                    <h6 className="text-xs font-semibold uppercase mb-6">
                      {footerItem.title}
                    </h6>
                    <ul>
                      {footerItem.subtitles.map((item, index) => {
                        return (
                          <li
                            className="text-[12px] cursor-pointer hover:text-[#C19753]"
                            key={index}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
            {footerItemCBSE.map((item) => {
              return (
                <div key={item.id} className=" w-[310px] my-4">
                  <div className="text-base">
                    <h6 className="text-xs font-semibold uppercase mb-6">
                      {item.title}
                    </h6>
                    <ul>
                      {item.subtitles.map((subitem, index) => {
                        return (
                          <li
                            className="text-[12px] cursor-pointer hover:text-[#C19753]"
                            key={index}
                          >
                            {subitem}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="w-[310px] my-4">
              <div>
                <h6 className="text-xs font-semibold uppercase mb-6">
                  LOCATE US
                </h6>
                <p className="text-[12px] mb-2">
                  Sector 102, 75 Meter Road, Near Dwarka Expressway, Gurgaon -
                  122006
                </p>
                <p className="text-[12px] mb-2 cursor-pointer hover:text-[#C19753]">
                  +91-7290002020
                </p>
                <p className="text-[12px] cursor-pointer hover:text-[#C19753]">
                  info@imperialheritageschool.com
                </p>
              </div>
            </div>
            <div className="my-4">
              <div className="mb-8">
                <h6 className="text-xs font-semibold uppercase">
                  CONNECT WITH US
                </h6>
              </div>
              <ul className="flex flex-wrap items-center gap-3">
                <li className="w-10 h-10 rounded-full hover:text-blue-500 hover:bg-white flex justify-center items-center cursor-pointer">
                  <FaFacebook className="text-xl" />
                </li>
                <li className="w-10 h-10 rounded-full hover:text-blue-500 hover:bg-white flex justify-center items-center cursor-pointer">
                  <FaTwitter className="text-xl" />
                </li>
                <li className="w-10 h-10 rounded-full hover:text-red-500 hover:bg-white flex justify-center items-center cursor-pointer">
                  <FaInstagram className="text-xl" />
                </li>
                <li className="w-10 h-10 rounded-full hover:text-red-500 hover:bg-white flex justify-center items-center cursor-pointer">
                  <FaYoutube className="text-xl" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center pt-12 px-12  ">
            <p className="text-[12px]">© 2023 Imperial Heritage School</p>
            <ul className="flex justify-center flex-1 gap-2">
              <li className="text-[12px] cursor-pointer hover:text-[#C19753]">
                Disclaimer
              </li>
              <li className="text-[12px] cursor-pointer hover:text-[#C19753]">
                Privacy Policy
              </li>
            </ul>
            <p className="text-[12px]">Designed and Developed by ECON</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
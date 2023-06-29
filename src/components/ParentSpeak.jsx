import React from 'react'
import { useState } from 'react';
import Male from '../assets/images/testim2.jpg'
import Female from '../assets/images/testim1.jpg'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ParentSpeak = () => {
     const reviews = [
       {
         id: 1,
         review:
           "The initiative of conducting the Online Classes for our kids by the school is a wonderful step in ensuring that students are engaged constructively and their academic year does not suffer much.The efforts of the teachers is really appreciable. The delivery of the lessons is through high quality Presentations,e- copies of Textbook/ Workbook/Worksheet is made available to students, clear instructionsaregiven to kids regarding the class assignments and the homework. Teachers are putting their hundred percent to ensure that each student understand the concepts well.",
         name: "Samiksh Mondal",
         parent: "Father: Biswanath Mondal",
         icon: "Male",
       },
       {
         id: 2,
         review:
           "Would like to go on record in saying that the activity which has been conducted by you on water conservation was really good as this spread awareness about the current tragic situation where in multiple cities across globe are facing water crisis .we been very fortunate as we have ample amount of water but having said that we still feel a water scarcity in Many cities.... therefore awareness for water conservation is a need of the hour.. my appreciation for the thoughtfulness of the school...",
         name: "Jay Batra",
         parent: "Mother: Sheetal Batra",
         icon: "Female",
       },
       {
         id: 3,
         review:
           "My daughter Shiya Thakur is studying in KG B. You have shifted to online teaching so beautifully that children enjoy these sessions and react as if they are in a real classroom and not a virtual one. The enthusiasm of the teachers (Sweety Ma’am and Poonam Ma’am) is so infectious that we parents also join in and attend the classes with our children. You have set high expectations for our child and we are sure that she will meet them ! I wanted to let you know you are doing great job and we support you completely what you are doing.",
         name: "Shiya Thakur(KG B)",
         parent: "Father: Atul Kumar Thakur",
         icon: "Male",
       },
       {
         id: 4,
         review:
           "The class presentation was totally a mesmerizing performance. The idea of controlling air pollution was very well executed and presented by the students. The forms like skit, rap, poem recitation and song which were used to convey the message of controlling air pollution made us all abide to the presentation from start till end.Wonderful job done by students and teachers.",
         name: "Akul Dhaka",
         parent: "Mother: Pooja Dhaka",
         icon: "Female",
       },
       {
         id: 5,
         review:
           "I am Aarushi’s mother who studies in Grade II B. I am extremely happy with the online classes as my daughter really looks forward to learning new concepts everyday. All the teachers are doing a wonderful job. Thank-you For Imperial Heritage School for having such motivated and dedicated staff members.",
         name: "Aarushi (Grade II B)",
         parent: "Mother:",
         icon: "Female",
       },
     ];
     const [current,setCurrent]=useState(0)
     const reviewLength=reviews.length
     const nextSlide=()=>{
        setCurrent(current===reviewLength-1?0:current+1)
     }
     const previousSlide=()=>{
        setCurrent(current===0?reviewLength-1:current-1)
     }
  return (
    <div className="w-full relative overflow-hidden py-24 bg-[#f8f9fa]">
      <div className="px-[15px] mx-auto">
        <div className="text-center ">
          <h2 className="text-4xl text-[#242D69]">Parent's Speak</h2>
        </div>
        <div className="relative p-10 mt-8 shadow-2xl border-b-4 border-solid border-[#C19753] max-w-[1210px] min-h-[376px] mx-auto ">
          {reviews.map((item, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-center max-w-80 mx-auto leading-7 px-12 text-lg">
                      "{item.review}"
                    </p>
                    <div className="pt-8">
                      <img
                        className="w-[60px] h-[60px] rounded-full mx-auto mb-4 shadow-md transition-all duration-300 ease-in-out"
                        src={item.icon === "Male" ? Male : Female}
                        alt="image"
                      />
                    </div>
                    <div>
                      <h5 className="text-center text-[#242d69] font-medium leading-tight text-xl">
                        {item.name}
                      </h5>
                      <p className="leading-[1.75]">{item.parent}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <button
            className="absolute left-8 top-1/2"
            onClick={() => previousSlide()}
          >
            <div className="w-[50px] h-[50px] border border-[#C19753] rounded-full flex justify-center items-center   transition-all duration-300 ease-in-out hover:w-[60px] hover:h-[60px] hover:bg-[#C19753]">
              <FiArrowLeft className="text-2xl " />
            </div>
          </button>
          <button
            className="absolute right-8 top-1/2"
            onClick={() => nextSlide()}
          >
            <div className="w-[50px] h-[50px] border border-[#C19753] rounded-full flex justify-center items-center   transition-all duration-300 ease-in-out hover:w-[60px] hover:h-[60px] hover:bg-[#C19753]">
              <FiArrowRight className="text-2xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentSpeak
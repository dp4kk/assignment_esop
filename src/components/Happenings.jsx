import React,{useState} from "react";
import image01 from "../assets/images/news1.jpg";
import image02 from "../assets/images/news2.jpg";
import image03 from "../assets/images/news3.jpg";
import image04 from "../assets/images/news4.jpg";
import image05 from "../assets/images/news5.jpg";
import image06 from "../assets/images/news6.jpg";

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


const Happenings = () => {
    const [carouselItems,setCarouselItems] = useState(carouselImages)

    const handleNext=()=>{
        setCarouselItems(prevItems=>[
            ...prevItems.slice(1),prevItems[0]
        ])
    }

    const handlePrev=()=>{
        setCarouselItems(prevItems=>[
            prevItems[prevItems.length-1],
            ...prevItems.slice(0,prevItems.length-1)
        ])
    }


  return (
    <div className="w-full my-24 relative overflow-hidden">
      <div className="max-w-[1240px] border-solid border-red-400 border-2  px-4 mx-auto">
        <div className="flex flex-wrap mx-[-15px] border-green-500 border-2">
          <div className="w-2/3 px-2">
            <div>
              <div className="flex justify-between">
                <p className="text-4xl mb-0">Latest Happenings</p>
                <p className="text-base font-bold">View all</p>
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
                      <a className="text-md font-bold">
                        Learn more <span className="font-bold text-lg">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-dashed border-gray-200 flex ">
                    {carouselItems.slice(0,3).map((items)=>{
                        return(
                            <div key={items.id} className="px-2">
                                <img src={items.image} alt='image'/>
                            </div>
                        )
                    })}
              </div>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Happenings;

import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://assets.ajio.com/cms/AJIO/WEB/21122020-D-Stores-Multistore-Sneakerhood.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/03042023-UHP-D-Main-P2-PumaSkechers-Min40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/05032023-D-RBL-topbannercarousel-p3-premiumbrands-upro40.jpg",
    "https://assets.ajio.com/cms/TRENDS/WEB/Top_banner_carousel_banner-4.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden py-16">
      <div className="h-[650px] w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover px-8 py-3 shadow-md"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover px-8 py-3 shadow-md"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover px-8 py-3 shadow-md"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover px-8 py-3 shadow-md"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

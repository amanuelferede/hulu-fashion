"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Slider from "react-slick";

import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { celebCollections } from "@/app/data/women/seleb-collections";
import { celebsSell } from "@/app/data/women/celebs-cell";
export default function CelbCollections() {
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,

    dots: false,
    arrows: false,
  };

  const settings2 = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,

    slidesToScroll: 1,
  };

  return (
    <div className="md:px-0 px-2 lg:max-w-7xl xl:max-w-350 mx-auto overflow-x-hidden py-2">
      <p className="mb-1.5">CREATED BY US</p>
      <p className="md:text-2xl font-semibold mb-2.5">Celebrity collections</p>
      <Slider {...settings}>
        {celebCollections.map((brand, index) => {
          return (
            <div className="p-3 border h-15 bg-black border-gray-300" key={index}>
              <Image
                key={index}
                src={brand.image}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-full object-scale-down"
              />
            </div>
          );
        })}
      </Slider>

      <div className="h-[70vh] mt-4  md:flex hidden">
        <div
          className="w-[35%] h-full"
          style={{
            backgroundImage: `url('/women/celebs/1/c.jpg')`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-[65%] bg-linear-to-b from-yellow-900/80 to-gray-900/95 to-95% h-full  flex items-center justify-center brands">
          <div className="w-full relative">
            <div
              onClick={handlePrev}
              className="absolute z-10 top-1/2 left-5  rounded-full  bg-white shadow-lg md:w-10 md:h-10 w-7 h-7 md:p-2.5 p-1 flex items-center justify-center"
            >
              <IoIosArrowBack className="w-10 h-10 cursor-pointer text-black" />
            </div>

            <div
              onClick={handleNext}
              className="absolute z-10 top-1/2 right-5  rounded-full bg-white shadow-lg md:w-10 md:h-10 w-7 h-7 md:p-2.5 p-1 flex items-center justify-center"
            >
              <IoIosArrowForward className="w-10 h-10 cursor-pointer text-black" />
            </div>
            <Slider {...settings} ref={sliderRef}>
              {celebsSell.map((brand, index) => {
                return (
                  <Image
                    key={index}
                    src={brand.image}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-full h-70  object-scale-down bg-gray-300"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <div
          className="w-full h-40"
          style={{
            backgroundImage: `url('/women/brands/cover/1.jpg')`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="pop-brands mt-1">
          <Slider {...settings2}>
            {celebsSell.map((brand, index) => {
              return (
                <Image
                  key={index}
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full h-70  object-scale-down bg-gray-300"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

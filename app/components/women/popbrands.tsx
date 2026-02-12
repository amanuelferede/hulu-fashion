"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Slider from "react-slick";
import { brands } from "../../data/women/brands";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { brandsSell } from "@/app/data/women/brands-sell";
export default function PopularBrands() {
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };

  return (
    <div className="md:px-0 px-2 w-full lg:max-w-7xl xl:max-w-350 mx-auto brands overflow-x-hidden py-5">
      <p className="mb-1.5">FROM OUR COMMUNITY</p>
      <p className="md:text-2xl font-semibold mb-2.5">Popular categories</p>
      <div className="relative">
        <Slider {...settings}>
          {brands.map((brand, index) => {
            return (
              <div className="p-3 border h-15 bg-black  border-gray-300" key={index}>
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
      </div>

      <div className="h-[70vh] mt-4 md:flex hidden">
        <div
          className="w-[35%] h-full"
          style={{
            backgroundImage: `url('/women/brands/6/c.jpg')`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-[65%] h-full bg-linear-to-tl from-pink-200/80 to-yellow-100/95 to-95%  flex items-center justify-center brands">
          <div className="w-full relative ">
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
              {brandsSell.map((brand, index) => {
                return (
                  <Image
                    key={index}
                    src={brand.image}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-full h-70  object-scale-down bg-gray-50"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <div
          className="w-full h-60"
          style={{
            backgroundImage: `url('/women/brands/cover/1.jpg')`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="pop-brands mt-1">
          <Slider {...settings2}>
            {brandsSell.map((brand, index) => {
              return (
                <Image
                  key={index}
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full h-70  object-scale-down bg-gray-50"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

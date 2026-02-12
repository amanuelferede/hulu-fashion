"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Slider from "react-slick";
import { celebCollections } from "../../data/women/celebcollections";
import { celebsSell } from "../../data/women/celebscell";
export default function CelbCollections() {
  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    dots: false,
    arrows: false,
  };

  return (
    <div className="w-full max-w-7xl mx-auto brands overflow-x-hidden py-2 md:px-0 px-2">
      <div className="flex flex-col space-y-2 my-3">
        <p>Createdby Us</p>
        <p className="text-3xl font-bold">Celebrity Collections</p>
      </div>
      <Slider {...settings}>
        {celebCollections.map((brand, index) => {
          return (
            <div className="p-3 border h-15  border-gray-300" key={index}>
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
          <div className="w-full ">
            <Slider {...settings}>
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

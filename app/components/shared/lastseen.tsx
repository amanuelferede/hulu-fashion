"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { lastSeen } from "../../data/lastseen";
export default function LastSeen() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
  };
  return (
    <div className="md:px-0 px-2 max-w-7xl mx-auto py-5 overflow-x-hidden">
      <div className="flex flex-col space-y-2 my-3">
        <p>CONTINUE SHOPPING</p>
        <p className="md:text-2xl font-bold">Last seen products</p>
      </div>
      <div className="md:block hidden">
        <Slider {...settings}>
          {lastSeen.map((brand, index) => {
            return (
              <Image
                key={index}
                src={brand.image}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-70 object-scale-down  bg-gray-50 p-5"
              />
            );
          })}
        </Slider>
      </div>

      <div className="md:hidden block">
        <Slider {...settings2}>
          {lastSeen.map((brand, index) => {
            return (
              <Image
                key={index}
                src={brand.image}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-70 object-scale-down  bg-gray-50 p-5"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

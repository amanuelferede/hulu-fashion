"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
export default function Ocational() {
  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    slidesToScroll: 1,
  };
  return (
    <div className="md:px-0 px-2 max-w-7xl mx-auto py-2">
      <p className="mb-1.5">CREATED BY US</p>
      <p className="md:text-2xl font-semibold mb-2.5">Occassional wearing</p>
      <div className="md:grid hidden grid-cols-4 gap-4">
        <div className="">
          <div className="h-103">
            <Image
              src={`/women/occational/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
          </div>
        </div>
        <div className="">
          <div className="h-103">
            <Image
              src={`/women/occational/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
          </div>
        </div>
        <div className="">
          <div className="h-103">
            <Image
              src={`/women/occational/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
          </div>
        </div>
        <div className="">
          <div className="h-103">
            <Image
              src={`/women/occational/4.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
          </div>
        </div>
      </div>

      <div className="md:hidden block pop-brands">
        <Slider {...settings2}>
          <div className="h-103">
            <Image
              src={`/women/occational/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
            <div className="p-3">
              <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
            </div>
          </div>
          <div className="h-103">
            <Image
              src={`/women/occational/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
            <div className="p-3">
              <p> Fisherman Core</p>
              <p>The coastal aesthetic</p>
            </div>
          </div>
          <div className="h-103">
            <Image
              src={`/women/occational/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full"
            />
            <div className="p-3">
              <p>Winterjacken</p>
              <p>Jacken und Mäntel zum Einkuscheln</p>
            </div>
          </div>
          <div className="h-103">
            <Image
              src={`/women/occational/4.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p> Layer up, level up - Winter’s just another runway</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

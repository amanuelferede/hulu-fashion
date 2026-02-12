"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { BsCart3 } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosTimer, IoMdArrowDropdown } from "react-icons/io";
import { similarProducts } from "@/app/data/similar";
import { moreProducts } from "@/app/data/more";
import LastSeen from "@/app/components/shared/lastseen";
import { compProducts } from "@/app/data/comp";
import { RiArrowRightSLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
export default function Men() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="h-10 bg-black"></div>
      <div className="max-w-300 mx-auto mt-5 md:px-0 px-2 relative">
        <div className="grid md:grid-cols-2 md:gap-20 gap-5">
          <div className="grid md:grid-cols-2 gap-2.5">
            <div>
              <Image
                src={`/product/1.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-105 object-cover"
              />
            </div>
            <div>
              <Image
                src={`/product/2.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-105 object-cover"
              />
            </div>
            <div>
              <Image
                src={`/product/3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-105 object-cover"
              />
            </div>
            <div>
              <Image
                src={`/product/4.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-105 object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center text-sm">
              <p>Women</p>
              <RiArrowRightSLine className="w-4 h-4" />
              <p>Clothing</p>
              <RiArrowRightSLine className="w-4 h-4" />
              <p>Dresses</p>
              <RiArrowRightSLine className="w-4 h-4" />
              <p>Shirt dresses</p>
              <RiArrowRightSLine className="w-4 h-4" />
              <p>YAS Shirt dresses</p>
            </div>
            <p className="text-xl font-semibold">YAS</p>
            <div className="flex flex-col space-y-2 mb-2.5">
              <p className="text-[0.97rem]">
                YAS Shirt Dress &apos;YASRIPPLE&apos; in Black
              </p>
              <div className="flex flex-col">
                <div className="flex space-x-2">
                  <p className=" px-2 text-sm  rounded-md bg-red-600 text-white">
                    -20%
                  </p>
                  <p className=" font-bold text-sm rounded-md line-through">
                    $ 109,90
                  </p>
                </div>
                <p className="text-red-700 font-semibold text-xl">$ 87,90</p>
              </div>
              <p className="font-semibold">
                <span>Color:</span> Black
              </p>
            </div>

            <p className="mb-1.5">Size</p>
            <div className="relative">
              <div className="flex items-center justify-between py-4.5 mb-2 px-4 border border-gray-300 rounded-lg">
                <p>38</p>
                <IoMdArrowDropdown className="w-5 h-5 text-black" />
              </div>
              <div className="absolute p-3 top-[99%] shadow-lg bg-white z-10 w-full">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <input type="radio" className="w-5 h-5 text-black" />
                    <p className="font-semibold">34</p>
                  </div>
                  <div className="flex items-center space-x-3.5">
                    <input type="radio" className="w-5 h-5 text-black" />
                    <p className="font-semibold">36</p>
                  </div>
                  <div className="flex items-center space-x-3.5">
                    <input type="radio" className="w-5 h-5 text-black" />
                    <p className="font-semibold">38</p>
                  </div>

                  <div className="flex items-center space-x-3.5">
                    <input type="radio" className="w-5 h-5 text-black" />
                    <p className="font-semibold">40</p>
                  </div>

                  <div className="flex items-center space-x-3.5">
                    <input type="radio" className="w-5 h-5 text-black" />
                    <p className="font-semibold">42</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 flex space-x-2">
              <button className="py-2.5 grow bg-black text-center text-white">
                Add to basket
              </button>
              <button className="p-2.5 flex items-center border border-gray-400 bg-white justify-center">
                <CiHeart className="text-black w-8 h-8" />
              </button>
            </div>
            <div className="text-center py-0.5 mb-5 bg-yellow-100">
              <p className="text-sm">Only 4 available!</p>
            </div>
            <div className="flex items-center bg-gray-100 space-x-2 py-2 px-3  my-3">
              <p className="text-sm">Sold & Shipped by ABOUT YOU</p>
            </div>
            <div id="shipping">
              <div className="flex p-3 mt-5 pl-4.5 border-t border-l border-r border-gray-300 items-center justify-between">
                <div className="flex items-center space-x-3">
                  <BsCart3 className="w-5 h-5" />
                  <p className="text-sm font-semibold">Free Shipping</p>
                </div>
                <p className="rounded-xl px-4 text-xs py-0.5 bg-green-600 text-white">
                  Free
                </p>
              </div>

              <div className="border-t border-l border-r border-gray-300 p-3 pl-4.5">
                <div className="flex mb-2 items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <IoIosTimer className="w-5 h-5" />

                    <p className="text-sm font-semibold">
                      10 - 14 working days
                    </p>
                  </div>
                  <p className="rounded-xl  bg-gray-500 px-2 text-xs py-1 text-white">
                    Worth the waite
                  </p>
                </div>
                <div className=" flex items-center justify-between bg-gray-100 p-1 px-4 text-xs text-black">
                  <p>
                    Final expected delivery times will be shown in your basket.
                  </p>
                </div>
              </div>

              <div className="flex p-3 pl-4.5 border border-gray-300 items-center justify-between">
                <div className="flex items-center space-x-3">
                  <GoArrowSwitch className="w-5 h-5" />

                  <p className="text-sm font-semibold">30 Days return policy</p>
                </div>
              </div>
            </div>

            <div id="properites" className="mt-3.5">
              <div className="">
                <div className="py-5 px-3.5 border-b border-b-gray-200 flex items-center justify-between">
                  <p className="font-semibold">Design & Extras</p>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
              </div>
              <div className="">
                <div className="py-5 px-3.5 border-b border-b-gray-200 flex items-center justify-between">
                  <p className="font-semibold">Size & Fit</p>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
              </div>
              <div className="">
                <div className="py-5 px-3.5 border-b border-b-gray-200 flex items-center justify-between">
                  <p className="font-semibold">Material & care instructions</p>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
              </div>
              <div className="">
                <div className="py-5 px-3.5 border-b border-b-gray-200 flex items-center justify-between">
                  <p className="font-semibold">Manufacturer Information</p>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
              </div>
              <div className="">
                <div className="py-5 px-3.5 border-b border-b-gray-200 flex items-center justify-between">
                  <p className="font-semibold">
                    Shell contains: 100% recycled material
                  </p>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
              </div>
              <div className=" flex-col space-y-1.5 hidden text-sm font-semibold">
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Plain colored</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Stand-up collar</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Draped/gathered</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Plain colored</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Button placket</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Puffed sleeves</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Structured feel</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Produced in an environmentally friendly way</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Zip fastening</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircle className="w-1.5 h-1.5" />
                  <p>Button placket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-2.5">
          <div className="grid md:grid-cols-3 gap-2.5">
            <div>
              <Image
                src={`/product/4.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-85 object-cover"
              />
            </div>
            <div>
              <Image
                src={`/product/6.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-85 object-cover"
              />
            </div>
            <div>
              <Image
                src={`/product/7.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-85 object-cover"
              />
            </div>
          </div>
        </div>

        <p>You Might also like</p>
        <p className="text-2xl font-semibold mb-2.5">Similar Products</p>
        <Slider {...settings}>
          {similarProducts.map((similar, index) => {
            return (
              <div key={index}>
                <Image
                  src={similar.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full h-70 object-scale-down p-4 bg-gray-50"
                />
              </div>
            );
          })}
        </Slider>
        <p>Outfit inspiration</p>
        <p className="text-2xl font-semibold mb-2.5">Wear it with</p>
        <div className="grid md:grid-cols-4">
          <div className="h-85">
            <Image
              src={`/product/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-scale-down border border-black rounded-lg"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-10 gap-3 py-9">
          <div className="">
            <p className="text-lg font-semibold">MORE FROM THIS BRAND</p>
            <p className="mt-3 font-bold text-2xl mb-2.5">YAS</p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              {moreProducts.map((product, index) => {
                return (
                  <div className="bg-gray-100" key={index}>
                    <Image
                      src={product.image}
                      alt="logo"
                      sizes="100vh"
                      width={0}
                      height={0}
                      className="w-full h-55 object-scale-down"
                    />
                  </div>
                );
              })}
              {moreProducts.map((product, index) => {
                return (
                  <div className="bg-gray-100" key={index}>
                    <Image
                      src={product.image}
                      alt="logo"
                      sizes="100vh"
                      width={0}
                      height={0}
                      className="w-full h-55 object-scale-down"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center mt-5">
              <button className=" px-4 py-2 text-center block border-2 border-gray-700">
                More from YAS
              </button>
            </div>
          </div>

          <div className="">
            <div
              className="h-150 sticky top-2 right-0"
              style={{
                backgroundImage: `url('/product/more/br.jpg')`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full flex items-center justify-center   bg-linear-to-b from-transparent to-black to-95%% absolute top-1/2 left-0 right-0 bottom-0 md:pl-10 px-2 z-10">
                <div>
                  <p className="text-4xl text-white text-center">YASS</p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-xl font-semibold text-white">
                      More Styles
                    </p>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-3 text-lg text-white">
                        <p className="underline font-sans whitespace-nowrap">
                          Dresses
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Skirts
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Sweaters & knitwear
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Tops
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Pants
                        </p>
                      </div>
                      <div className="flex space-x-3 text-lg text-white">
                        <p className="underline font-sans whitespace-nowrap">
                          Blouses & tunics
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Knitwear
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Maxi dresses
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Shirt dresses
                        </p>
                      </div>

                      <div className="flex space-x-3 text-lg text-white">
                        <p className="underline font-sans whitespace-nowrap">
                          Sweaters
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Mini skirts
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Midi skirts
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Classic tops
                        </p>
                      </div>

                      <div className="flex space-x-3 text-lg text-white">
                        <p className="underline font-sans whitespace-nowrap">
                          Knit dresses
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Evening dresses
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Mini dresses
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Blazers
                        </p>
                      </div>

                      <div className="flex space-x-3 text-lg text-white">
                        <p className="underline font-sans whitespace-nowrap">
                          Jackets
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Jumpsuits & playsuits
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Mini dresses
                        </p>
                        <p className="underline font-sans whitespace-nowrap">
                          Coats
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>Complete your look</p>
        <p className="text-2xl font-semibold mb-2.5">Complementary products</p>
        <Slider {...settings}>
          {compProducts.map((similar, index) => {
            return (
              <div key={index}>
                <Image
                  src={similar.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full h-60 object-scale-down bg-gray-50"
                />
              </div>
            );
          })}
        </Slider>

        <LastSeen />
      </div>
    </>
  );
}

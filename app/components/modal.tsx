"use client";

import { CgClose } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { colordProducts } from "../data/colors";
import { modalPhotos } from "../data/modalphotos";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowRight, BsInfoCircle } from "react-icons/bs";
export default function ProductModal() {
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
    <div className="bg-black/50 z-50 fixed top-0 bottom-0 left-0 right-0">
      <div className="max-w-3xl mt-15 rounded-xl mx-auto bg-white relative">
        <CgClose className="w-8 h-8 absolute top-3 right-3" />
        <div
          className="max-h-120 overflow-x-hidden  p-4 overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-black/40
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-100">
              <Image
                src={`/product/modal/c3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full h-110 object-scale-down"
              />
            </div>

            <div className="">
              <div className="flex flex-col space-y-2">
                <div>
                  <p className="text-xl font-bold">YAS</p>
                  <p>YAS Shirt Dress &apos;Savanna&apos; in Bright Red</p>
                </div>
                <p className="font-semibold text-lg">$ 77,90</p>
                <p>Color: bright red</p>
                <Slider {...settings}>
                  {colordProducts.map((product, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={product.image}
                          alt="logo"
                          sizes="100vh"
                          width={0}
                          height={0}
                          className="w-14 h-14 object-scale-down  bg-gray-50"
                        />
                      </div>
                    );
                  })}
                </Slider>
                <div className="relative">
                  <div className="flex items-center justify-between py-4.5 mb-2 px-4 border border-gray-300 rounded-lg">
                    <p>38</p>
                    <IoMdArrowDropdown className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute hidden  p-3 -top-3/4 shadow-lg bg-white z-10 w-full">
                    <div className="flex items-center mb-2.5">
                      <div className="py-3 grow border-b-2 border-black px-3.5 flex items-center justify-center">
                        <p>Size (Eu)</p>
                      </div>
                      <div className="py-3 grow px-3.5 flex items-center justify-center">
                        <p>Vendor Size</p>
                      </div>
                    </div>
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
                <p>Uncertain about the size? Size advisor</p>
                <div className="text-center py-0.5 mb-5 bg-yellow-100">
                  <p className="text-sm">Only 4 available!</p>
                </div>
                <button className="py-2.5 rounded-md grow bg-black text-center text-white">
                  Add to basket
                </button>
                <div className="flex items-center justify-end space-x-1.5">
                  <p className="text-sm">More details</p>
                  <BsArrowRight className="w-5 h-5 stroke-1" />
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 p-1.5">
                  <p>
                    <span className="text-sm">Sold & Shipped by</span>
                    <span className="font-semibold text-sm"> ABOUT YOU</span>
                  </p>
                  <BsInfoCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 ">
            <div className="">
              <Slider {...settings}>
                {modalPhotos.map((product, index) => {
                  return (
                    <div key={index}>
                      <Image
                        src={product.image}
                        alt="logo"
                        sizes="100vh"
                        width={0}
                        height={0}
                        className="w-14 h-14 object-scale-down  bg-gray-50"
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

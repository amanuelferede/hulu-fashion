"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function PopularCategory() {
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
    <div className="md:px-0 px-2 lg:max-w-7xl xl:max-w-350 mx-auto py-2">
      <p className="mb-1.5">FROM OUR COMMUNITY</p>
      <p className="md:text-2xl font-semibold mb-2.5">Popular categories</p>
      <div className="md:grid hidden md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="relative">
            <Image
              src={`/women/categories/jeans/jeans.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Jeans</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/women/categories/jeans/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/jeans/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/jeans/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/women/categories/lace dresses/lace dresses.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Trenchcoats</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/women/categories/lace dresses/1.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/lace dresses/2.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/lace dresses/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/women/categories/dresses/dresses.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Dresses</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/women/categories/dresses/1.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/dresses/2.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/dresses/3.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/women/categories/classic slip-ons/classic slip-ons.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Between Seasonal Jackets</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/women/categories/classic slip-ons/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/classic slip-ons/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
            <Image
              src={`/women/categories/classic slip-ons/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down md:p-2 bg-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden block pop-brands  ">
        <Slider {...settings2}>
          <div className="relative">
            <div className="relative">
              <Image
                src={`/women/categories/1/c.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full"
              />
              <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
                <div className="flex items-center justify-center space-x-1.5">
                  <p>Jeans</p>
                  <FaLongArrowAltRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
              <Image
                src={`/women/categories/1/1.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/1/2.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/1/3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
            </div>
          </div>
          <div className="">
            <div className="relative">
              <Image
                src={`/women/categories/2/c.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full"
              />
              <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
                <div className="flex items-center justify-center space-x-1.5">
                  <p>Trenchcoats</p>
                  <FaLongArrowAltRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
              <Image
                src={`/women/categories/2/1.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/2/2.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/2/3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
            </div>
          </div>
          <div className="">
            <div className="relative">
              <Image
                src={`/women/categories/3/c.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full"
              />
              <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
                <div className="flex items-center justify-center space-x-1.5">
                  <p>Dresses</p>
                  <FaLongArrowAltRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
              <Image
                src={`/women/categories/3/1.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/3/2.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/3/3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
            </div>
          </div>
          <div className="">
            <div className="relative">
              <Image
                src={`/women/categories/4/c.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full"
              />
              <div className="p-1.5 text-sm mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
                <div className="flex items-center justify-center space-x-1.5">
                  <p>Between Seasonal Jackets</p>
                  <FaLongArrowAltRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
              <Image
                src={`/women/categories/4/1.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/4/2.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
              <Image
                src={`/women/categories/4/3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className="grow h-25 object-scale-down md:p-2 bg-gray-100"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

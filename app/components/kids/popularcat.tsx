"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function PopularCategory() {
  
 const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    dots: false,
    arrows: false,
    slidesToScroll: 4,
  };
  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-7xl mx-auto py-5">
      <p className="mb-1.5">FROM OUR COMMUNITY</p>
      <p className="md:text-2xl font-semibold mb-2.5">Popular categories</p>
      <div className="md:block hidden">
        <Slider {...settings}>
        <div className="relative">
          <div className="relative">
            <Image
              src={`/kid/categories/kids size 92 - 140/kids size 92 - 140.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>kids size 92 - 140</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/kids size 92 - 140/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/kids size 92 - 140/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/kids size 92 - 140/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/kid/categories/shoes/shoes.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Trenchcoats</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/shoes/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes/2.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes/3.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/kid/categories/clothing1/clothing1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Dresses</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/clothing1/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/clothing1/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/clothing1/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/kid/categories/shoes2/shoes2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Between Seasonal Jackets</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/shoes2/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes2/2.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes2/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
      </Slider>
      </div>
      <div className="md:hidden block pop-brands  ">
        <Slider {...settings2}>
          <div className="relative">
          <div className="relative">
            <Image
              src={`/kid/categories/kids size 92 - 140/kids size 92 - 140.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>kids size 92 - 140</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/kids size 92 - 140/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/kids size 92 - 140/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/kids size 92 - 140/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/kid/categories/shoes/shoes.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Trenchcoats</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/shoes/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes/2.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes/3.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/kid/categories/clothing1/clothing1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Dresses</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/clothing1/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/clothing1/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/clothing1/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={`/kid/categories/shoes2/shoes2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-1.5 mx-3 bg-white/30 backdrop-blur-md shadow-lg  border border-white rounded-md absolute bottom-3 left-0 right-0 ">
              <div className="flex items-center justify-center space-x-1.5">
                <p>Between Seasonal Jackets</p>
                <FaLongArrowAltRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex space-x-1.5 shadow-sm rounded-bl-xl">
            <Image
              src={`/kid/categories/shoes2/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes2/2.jpeg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
            <Image
              src={`/kid/categories/shoes2/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="grow h-25 object-scale-down p-2 bg-gray-100"
            />
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
}

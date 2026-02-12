"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

export default function Carousel() {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    slidesToScroll: 1,
  };

  return (
    <>
      <div className="min-h-[78vh] md:block hidden overflow-x-hidden">
        <Slider {...settings}>
          <div className="py-5 min-h-[78vh] pl-6 bg-linear-to-b from-orange-900/80 to-yellow-900/95 to-95%">
            <div className="flex space-x-6 md:flex-row flex-col">
              <div className="w-[35%] py-7">
                <div className="px-6 pb-32">
                  <p className="w-auto mb-2 px-4 py-0.5 inline-block rounded-md bg-white">
                    From our popular brands
                  </p>
                  <p className="text-3xl text-white">Explore The Brand</p>

                  <p className="text-xl text-white mb-2 ">Sub Level</p>
                </div>

                <div className="flex space-x-1.5">
                  <Image
                    src={`/kid/carousel/sell/1/1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/1/2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/1/3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/1/4.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                </div>
              </div>
              <div
                className="w-[65%]"
                style={{
                  backgroundImage: `url('/kid/carousel/1.png')`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>

          <div className="py-5 min-h-[78vh] pl-6 bg-linear-to-b from-orange-900/80 to-black/95 to-95%">
            <div className="flex space-x-6 md:flex-row flex-col">
              <div className="w-[35%] py-7">
                <div className="px-6 pb-32">
                  <p className="w-auto mb-2 px-4 py-0.5 inline-block rounded-md bg-white">
                    From our popular categories
                  </p>
                  <p className="text-3xl text-white">Explore The Category</p>

                  <p className="text-xl text-white mb-2 ">Tops</p>
                </div>

                <div className="flex space-x-1.5">
                  <Image
                    src={`/kid/carousel/sell/2/1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/2/2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/2/3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/2/4.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                </div>
              </div>
              <div
                className="w-[65%]"
                style={{
                  backgroundImage: `url('/kid/carousel/2.png')`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>

          <div className="py-5 min-h-[78vh] pl-6 bg-linear-to-b from-yellow-800/80 to-blue-300/95 to-95%">
            <div className="flex space-x-6 md:flex-row flex-col">
              <div className="w-[35%] py-7">
                <div className="px-6 pb-32">
                  <p className="w-auto mb-2 px-4 py-0.5 inline-block rounded-md bg-white">
                    From Current Trends
                  </p>
                  <p className="text-3xl text-white">Explore The Story</p>

                  <p className="text-xl text-white mb-2 ">
                    Soft, Cozy, and Fashionable
                  </p>
                </div>

                <div className="flex space-x-1.5">
                  <Image
                    src={`/kid/carousel/sell/3/1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/3/2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/kid/carousel/sell/3/3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/sell 3/4.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                </div>
              </div>
              <div
                className="w-[65%]"
                style={{
                  backgroundImage: `url('/kid/carousel/3.png')`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="min-h-[60vh] w-full gallery overflow-x-hidden md:hidden block">
        <Slider {...settings}>
          <div className=" w-full h-[60vh] bg-linear-to-b from-yellow-900/80 to-gray-900/95 to-95% p-2.5 pt-5 pb-18">
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url('/kid/carousel/1.png')`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <p className="px-1.5 text-sm rounded-xl inline-block absolute z-10 bg-white text-black -top-2 left-1/2 -translate-x-1/2 text-nowrap">
                {" "}
                From our popular brands
              </p>
              <div className="absolute w-full bottom-2 flex space-x-1.5 px-2 justify-center">
                <Image
                  src={`/kid/carousel/sell/1/1.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/1/2.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/1/3.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/1/4.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
              </div>
            </div>
            <p className="text-sm mt-2 text-white font-semibold text-center">
              EXPLORE TEH BRAND
            </p>
            <p className="mt-1 text-white text-sm font-semibold text-center">
              ONLY
            </p>
          </div>
          <div className=" w-full h-[60vh] bg-linear-to-b from-red-900/80 to-gray-900/95 p-2.5 pt-5 pb-18">
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url('/kid/carousel/2.png')`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <p className="px-1.5 text-sm rounded-xl inline-block absolute z-10 bg-white text-black -top-2 left-1/2 -translate-x-1/2 text-nowrap">
                {" "}
                From our popular categories
              </p>
              <div className="absolute w-full bottom-2 flex space-x-1.5 px-2 justify-center">
                <Image
                  src={`/kid/carousel/sell/2/1.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/2/2.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/2/3.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/2/4.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
              </div>
            </div>
            <p className="text-sm mt-2 text-white font-semibold text-center">
              EXPLORE TEH CATEGORY
            </p>
            <p className="mt-1 text-center font-semibold text-white text-sm">
              Tops
            </p>
          </div>

          <div className=" w-full h-[60vh] bg-linear-to-b from-red-900/80 to-gray-900/95 p-2.5 pt-5 pb-18">
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url('/kid/carousel/3.png')`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <p className="px-1.5 text-sm rounded-xl inline-block absolute z-10 bg-white text-black -top-2 left-1/2 -translate-x-1/2 text-nowrap">
                {" "}
                From our popular categories
              </p>
              <div className="absolute w-full bottom-2 flex space-x-1.5 px-2 justify-center">
                <Image
                  src={`/kid/carousel/sell/3/1.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/3/2.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/3/3.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/kid/carousel/sell/3/4.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
              </div>
            </div>
            <p className="text-sm mt-2 text-white font-semibold text-center">
              EXPLORE TEH CATEGORY
            </p>
            <p className="mt-1 text-center font-semibold text-white text-sm">
              Tops
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

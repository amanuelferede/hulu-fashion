"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

export default function carousel() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="min-h-[78vh] md:block hidden overflow-x-hidden gallery">
        <Slider {...settings}>
          <div className="py-5 bg-linear-to-b pl-6 min-h-[78vh] from-yellow-900/80 to-gray-900/95 to-95%">
            <div className="flex space-x-6">
              <div className="w-[35%] py-7">
                <div className="px-6 pb-32">
                  <p className="w-auto mb-7 px-4 py-0.5 inline-block rounded-3xl text-[0.97rem] bg-white">
                    From our popular brands
                  </p>

                  <p className="text-lg text-white">EXPLORE THE BRAND</p>
                  <p className="text-3xl font-semibold text-white mb-2 ">
                    Sub Level
                  </p>
                </div>

                <div className="flex space-x-1.5 pl-1.5">
                  <Image
                    src={`/women/carousel/1/s1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/1/s2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/1/s3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/1/s4.jpg`}
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
                  backgroundImage: `url('/women/carousel/1/1.png')`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>

          <div className="py-5 min-h-[78vh] bg-linear-to-b pl-6 from-red-900/80 to-gray-900/95 to-95%">
            <div className="flex space-x-6 md:flex-row flex-col">
              <div className="w-[35%] py-7">
                <div className="px-6 pb-32">
                  <p className="w-auto mb-7 px-4 py-0.5 inline-block rounded-3xl text-[0.97rem] bg-white">
                    From our popular categories
                  </p>
                  <p className="text-lg text-white">EXPLORE THE CATEGORY</p>
                  <p className="text-3xl font-semibold text-white mb-2 ">
                    Tops
                  </p>
                </div>

                <div className="flex space-x-1.5 pl-1.5">
                  <Image
                    src={`/women/carousel/2/s1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/2/s2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/2/s3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/2/s4.jpg`}
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
                  backgroundImage: `url('/women/carousel/2/2.png')`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>

          <div className="py-5 min-h-[78vh] bg-linear-to-b pl-6 from-blue-900/80 to-gray-900/95 to-95%">
            <div className="flex space-x-6 md:flex-row flex-col">
              <div className="w-[35%] py-7">
                <div className="px-6 pb-32">
                  <p className="w-auto mb-7 px-4 py-0.5 inline-block rounded-3xl text-[0.97rem] bg-white">
                    From Current Trends
                  </p>
                  <p className="text-lg text-white">EXPLORE THE STORY</p>
                  <p className="text-3xl font-semibold text-white mb-2 ">
                    Soft, Cozy, and Fashionable
                  </p>
                </div>

                <div className="flex space-x-1.5 pl-1.5">
                  <Image
                    src={`/women/carousel/3/s1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/3/s2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/3/s3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-25 h-30 p-2 bg-gray-100 rounded-md object-scale-down"
                  />
                  <Image
                    src={`/women/carousel/3/s4.jpg`}
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
                  backgroundImage: `url('/women/carousel/3/3.png')`,
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
          <div className=" w-full h-[60vh] bg-linear-to-b pl-6 from-yellow-900/80 to-gray-900/95 to-95% p-2.5 pt-5 pb-18">
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url('/women/carousel/1.jpg')`,
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
                  src={`/women/carousel/1/1.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/1/2.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/1/3.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/1/4.jpg`}
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
          <div className=" w-full h-[60vh] bg-linear-to-b pl-6 from-red-900/80 to-gray-900/95 p-2.5 pt-5 pb-18">
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url('/women/carousel/2.jpg')`,
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
                  src={`/women/carousel/2/1.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/2/2.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/2/3.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/2/4.jpg`}
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

          <div className=" w-full h-[60vh] bg-linear-to-b pl-6 from-red-900/80 to-gray-900/95 p-2.5 pt-5 pb-18">
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url('/women/carousel/3.jpg')`,
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
                  src={`/women/carousel/3/1.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/3/2.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/3/3.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="grow h-18 p-2 bg-gray-100 rounded-md object-scale-down"
                />
                <Image
                  src={`/women/carousel/3/4.jpg`}
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

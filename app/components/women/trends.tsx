"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
export default function Trends() {
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
    <div className="md:px-0 px-2 lg:max-w-7xl xl:max-w-350 mx-auto py-2">
      <p className="mb-1.5">CREATED BY US</p>
      <p className="md:text-2xl font-semibold mb-2.5">Current trends</p>
      <div className="md:grid grid-cols-4 gap-2 hidden">
        <div className="">
          <Image
            src={`/women/trends/1.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
          <div className="p-3">
            <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
          </div>
        </div>
        <div className="">
          <Image
            src={`/women/trends/2.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
          <div className="p-3">
            <p> Fisherman Core</p>
            <p>The coastal aesthetic</p>
          </div>
        </div>
        <div className="">
          <Image
            src={`/women/trends/3.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
          <div className="p-3">
            <p>Winterjacken</p>
            <p>Jacken und Mäntel zum Einkuscheln</p>
          </div>
        </div>
        <div className="">
          <Image
            src={`/women/trends/4.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
          <div className="p-3">
            <p> ABOUT WINTER 2025</p>
            <p> Layer up, level up - Winter’s just another runway</p>
          </div>
        </div>
      </div>

      <div className="md:hidden block pop-brands">
        <Slider {...settings2}>
          <div className="">
            <Image
              src={`/women/trends/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p>Sneaker Spotlight</p> <p>Heroes of the streets</p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> Fisherman Core</p>
              <p className="line-clamp-2 md:text-md text-sm">
                The coastal aesthetic
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p>Winterjacken</p>
              <p className="line-clamp-2 md:text-md text-sm">
                Jacken und Mäntel zum Einkuscheln
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/4.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>

          <div className="">
            <Image
              src={`/women/trends/5.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/6.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/7.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/8.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/9.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={`/women/trends/10.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="p-3">
              <p> ABOUT WINTER 2025</p>
              <p className="line-clamp-2 md:text-md text-sm">
                {" "}
                Layer up, level up - Winter’s just another runway
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

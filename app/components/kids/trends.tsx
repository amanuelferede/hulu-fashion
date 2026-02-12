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
    <div className="max-w-7xl mx-auto py-2 md:px-0 px-2">
      <p className="mb-1.5">CREATED BY US</p>
      <p className="md:text-2xl font-semibold mb-2.5">Boys trends</p>
      <div className="md:grid hidden grid-cols-4 gap-4">
        <div className="">
          <Image
            src={`/kid/girls/trends/1.jpg`}
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
            src={`/kid/girls/trends/2.jpg`}
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
            src={`/kid/girls/trends/3.jpg`}
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
            src={`/kid/girls/trends/4.jpg`}
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
        <div className="">
          <Image
            src={`/kid/girls/trends/5.jpg`}
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
        <div className="">
          <Image
            src={`/kid/girls/trends/6.jpg`}
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
        <div className="">
          <Image
            src={`/kid/girls/trends/7.jpg`}
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
        <div className="">
          <Image
            src={`/kid/girls/trends/8.jpg`}
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
        <div className="">
          <Image
            src={`/kid/girls/trends/9.jpg`}
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
      <p className="mb-1.5">CREATED BY US</p>
      <p className="md:text-2xl font-semibold mb-2.5">Girls trends</p>
      <div className="md:grid hidden grid-cols-4 gap-4">
        <div className="">
          <Image
            src={`/kid/boys/trends/1.jpg`}
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
            src={`/kid/boys/trends/2.jpg`}
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
            src={`/kid/boys/trends/3.jpg`}
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
            src={`/kid/boys/trends/4.jpg`}
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
        <div className="">
          <Image
            src={`/kid/boys/trends/5.jpg`}
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
        <div className="">
          <Image
            src={`/kid/boys/trends/6.jpg`}
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
              src={`/kid/girls/trends/1.jpg`}
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
              src={`/kid/girls/trends/2.jpg`}
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
              src={`/kid/girls/trends/3.jpg`}
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
              src={`/kid/girls/trends/4.jpg`}
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
          <div className="">
            <Image
              src={`/kid/girls/trends/5.jpg`}
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
          <div className="">
            <Image
              src={`/kid/girls/trends/6.jpg`}
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
          <div className="">
            <Image
              src={`/kid/girls/trends/7.jpg`}
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
          <div className="">
            <Image
              src={`/kid/girls/trends/8.jpg`}
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
          <div className="md:hidden block">
            <Image
              src={`/kid/girls/trends/9.jpg`}
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
        </Slider>
      </div>

      <div className="md:hidden block pop-brands">
        <Slider {...settings2}>
          <div className="">
            <Image
              src={`/kid/boys/trends/1.jpg`}
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
              src={`/kid/boys/trends/2.jpg`}
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
              src={`/kid/boys/trends/3.jpg`}
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
              src={`/kid/boys/trends/4.jpg`}
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
          <div className="">
            <Image
              src={`/kid/boys/trends/5.jpg`}
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
          <div className="">
            <Image
              src={`/kid/boys/trends/6.jpg`}
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
        </Slider>
      </div>
    </div>
  );
}

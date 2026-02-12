import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function SportsWears() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">Sports bags & backpacks</p>
          <p className="whitespace-nowrap tex-sm">Sports accessories</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Sportswear</p>
          <p className="whitespace-nowrap tex-sm">Explore All</p>
          <p className="whitespace-nowrap tex-sm">Sports bottoms & leggings</p>
          <p className="whitespace-nowrap tex-sm">Sports bottoms & leggings</p>
          <p className="whitespace-nowrap tex-sm">Sports underwear</p>
          <p className="whitespace-nowrap tex-sm">Sports jackets</p>
          <p className="whitespace-nowrap tex-sm">Sports sweaters</p>
          <p className="whitespace-nowrap tex-sm">Sports sweaters</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Sports shoes</p>
          <p className="whitespace-nowrap tex-sm">Explore All</p>
          <p className="whitespace-nowrap tex-sm">Running shoes</p>
          <p className="whitespace-nowrap tex-sm">Running shoes</p>
          <p className="whitespace-nowrap tex-sm">Sports shoes</p>
          <p className="whitespace-nowrap tex-sm">Indoor shoes</p>
          <p className="whitespace-nowrap tex-sm">Poolside shoes</p>
          <p className="whitespace-nowrap tex-sm"></p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-1 gap-3.5">
          {brands.slice(0, 5).map((brand, index) => {
            return (
              <div key={index} className=" p-4 bg-[#f4f1f1]">
                <Image
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full object-scale-down"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="">
            <Image
              src={`/dropdown/women/sportswear/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <Image
              src={`/dropdown/women/sportswear/2.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <Image
              src={`/dropdown/women/sportswear/3.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <Image
              src={`/dropdown/women/sportswear/4.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <Image
            src={`/dropdown/women/sportswear/c.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

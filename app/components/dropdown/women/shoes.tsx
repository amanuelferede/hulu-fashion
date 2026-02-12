import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function Shoes() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">Sneakers</p>
          <p className="whitespace-nowrap tex-sm">Sneakers</p>
          <p className="whitespace-nowrap tex-sm">High heels</p>
          <p className="whitespace-nowrap tex-sm">Boots</p>
          <p className="whitespace-nowrap tex-sm">Boots</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Low shoes</p>
          <p className="whitespace-nowrap tex-sm">Sports Shoes</p>
          <p className="whitespace-nowrap tex-sm">Ballet Flats</p>
          <p className="whitespace-nowrap tex-sm">Slip - ons</p>
          <p className="whitespace-nowrap tex-sm">Slippers</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Highlights</p>
          <p className="whitespace-nowrap tex-sm">New</p>
          <p className="whitespace-nowrap tex-sm">Trending</p>
          <p className="whitespace-nowrap tex-sm">Trending</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-3.5">
          {brands.map((brand, index) => {
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
        <div>
          <Image
            src={`/dropdown/women/shoes/1.jpg`}
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

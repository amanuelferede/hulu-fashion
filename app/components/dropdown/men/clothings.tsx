import { brands } from "@/app/data/men/brands";
import Image from "next/image";
export default function Clothings() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="md:col-span-2 col-span-12">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">T-shirts</p>
          <p className="whitespace-nowrap tex-sm">Jeans</p>
          <p className="whitespace-nowrap tex-sm">Jackets</p>
          <p className="whitespace-nowrap tex-sm">Sweaters & hoodies</p>
          <p className="whitespace-nowrap tex-sm">Pants</p>
          <p className="whitespace-nowrap tex-sm">Pants</p>
        </div>
      </div>
      <div className="md:col-span-2 col-span-12">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Underwear</p>
          <p className="whitespace-nowrap tex-sm">Sweaters & cardigans</p>
          <p className="whitespace-nowrap tex-sm">Suits & jackets</p>
          <p className="whitespace-nowrap tex-sm">Coats</p>
          <p className="whitespace-nowrap tex-sm">Swimwear</p>
          <p className="whitespace-nowrap tex-sm">Swimwear</p>
        </div>
      </div>
      <div className="md:col-span-2 col-span-12">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Highlights</p>
          <p className="whitespace-nowrap tex-sm">New</p>
          <p className="whitespace-nowrap tex-sm">Occasions</p>
          <p className="whitespace-nowrap tex-sm">Trending</p>
          <p className="whitespace-nowrap tex-sm">Exclusive</p>
          <p className="whitespace-nowrap tex-sm">Premium</p>
          <p className="whitespace-nowrap tex-sm">Upcycling</p>
        </div>
      </div>
      <div className="md:col-span-2 col-span-12">
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
      <div className="md:col-span-4 col-span-12">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={`/dropdown/men/clothings/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

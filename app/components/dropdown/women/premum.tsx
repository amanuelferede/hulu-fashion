import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function Premium() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap text-sm">Explore all</p>
          <p className="whitespace-nowrap text-sm">New</p>
          <p className="whitespace-nowrap text-sm">Dresses</p>
          <p className="whitespace-nowrap text-sm">Jeans</p>
          <p className="whitespace-nowrap text-sm">Tops</p>
          <p className="whitespace-nowrap text-sm">Pants</p>
          <p className="whitespace-nowrap text-sm">Jackets & coats</p>
          <p className="whitespace-nowrap text-sm">Knitwear</p>
          <p className="whitespace-nowrap text-sm"></p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">Underwear & swimwear</p>
          <p className="whitespace-nowrap text-sm">Blouses & tunics</p>
          <p className="whitespace-nowrap text-sm">Skirts</p>
          <p className="whitespace-nowrap text-sm">Sweaters & hoodies</p>
          <p className="whitespace-nowrap text-sm">Jumpsuits & playsuits</p>
          <p className="whitespace-nowrap text-sm">Shoes</p>
          <p className="whitespace-nowrap text-sm">Accessories</p>
          <p className="whitespace-nowrap text-sm"></p>
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
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src={`/dropdown/women/premum/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/premum/2.jpg`}
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

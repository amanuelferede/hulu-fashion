import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function StreetsWears() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap text-sm">Shoes</p>
          <p className="whitespace-nowrap text-sm">Sweaters & hoodies</p>
          <p className="whitespace-nowrap text-sm">Tops</p>
          <p className="whitespace-nowrap text-sm">Tops</p>
          <p className="whitespace-nowrap text-sm">Tops</p>
          <p className="whitespace-nowrap text-sm">Tracksuits</p>
          <p className="whitespace-nowrap text-sm">Explore all categories</p>
        </div>
      </div>{" "}
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">Knitwear</p>
          <p className="whitespace-nowrap text-sm">Blouses & tunics</p>
          <p className="whitespace-nowrap text-sm">Jackets & blazers</p>
          <p className="whitespace-nowrap text-sm">Dresses</p>
          <p className="whitespace-nowrap text-sm">Accessories</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-1 gap-3.5">
          {brands.slice(0, 5).map((brand, index) => {
            return (
              <div key={index} className=" p-4 bg-black">
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
      <div className="col-span-4">
        <div>
          <Image
            src={`/women/dropdown/streetswear/1.jpg`}
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

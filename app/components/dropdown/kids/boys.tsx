import { brands } from "@/app/data/kids/brands";
import Image from "next/image";
export default function Boys() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Kids (Size 92-140)</p>
          <p className="whitespace-nowrap tex-sm">Explore All</p>
          <p className="whitespace-nowrap tex-sm">New</p>
          <p className="whitespace-nowrap tex-sm">Clothing</p>
          <p className="whitespace-nowrap tex-sm">Shoes</p>
          <p className="whitespace-nowrap tex-sm">Sportswear</p>
          <p className="whitespace-nowrap tex-sm">Accessories</p>
          <p className="whitespace-nowrap tex-sm">SALE</p>
          <p className="whitespace-nowrap tex-sm"></p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Jeans & pants</p>
          <p className="whitespace-nowrap tex-sm">Tops</p>
          <p className="whitespace-nowrap tex-sm">Jackets & coats</p>
          <p className="whitespace-nowrap tex-sm">One-pieces & sets</p>
          <p className="whitespace-nowrap tex-sm">Sweaters & cardigans</p>
          <p className="whitespace-nowrap tex-sm">Underwear</p>
          <p className="whitespace-nowrap tex-sm">Swimwear</p>
          <p className="whitespace-nowrap tex-sm">Outdoor</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Teens (Size 140-176)</p>
          <p className="whitespace-nowrap tex-sm">Explore All</p>
          <p className="whitespace-nowrap tex-sm">New</p>
          <p className="whitespace-nowrap tex-sm">Clothing</p>
          <p className="whitespace-nowrap tex-sm">Shoes</p>
          <p className="whitespace-nowrap tex-sm">Sportswear</p>
          <p className="whitespace-nowrap tex-sm">Accessories</p>
          <p className="whitespace-nowrap tex-sm">SALE</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Jeans & pants</p>
          <p className="whitespace-nowrap tex-sm">Tops</p>
          <p className="whitespace-nowrap tex-sm">Sweaters & cardigans</p>
          <p className="whitespace-nowrap tex-sm">Jackets & coats</p>
          <p className="whitespace-nowrap tex-sm">Underwear</p>
          <p className="whitespace-nowrap tex-sm">Swimwear</p>
          <p className="whitespace-nowrap tex-sm">Outdoor</p>
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
        <div>
          <Image
            src={`/dropdown/kid/boys/1.jpg`}
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

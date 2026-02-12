import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function Brands() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand, index) => {
            return (
              <div key={index} className=" p-4 bg-[#f4f1f1]">
                <Image
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand, index) => {
            return (
              <div key={index} className=" p-4 bg-[#f4f1f1]">
                <Image
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand, index) => {
            return (
              <div key={index} className=" p-4 bg-[#f4f1f1]">
                <Image
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-4">
        <div>
          <Image
            src={`/dropdown/women/brands/1.jpg`}
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

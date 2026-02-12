import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function Accssories() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">Bags & backpacks</p>
          <p className="whitespace-nowrap tex-sm">Jewelry</p>
          <p className="whitespace-nowrap tex-sm">Scarves & Wraps</p>
          <p className="whitespace-nowrap tex-sm">Hats & caps</p>
          <p className="whitespace-nowrap tex-sm">Belts</p>
        </div>
      </div>{" "}
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Wallets & cases</p>
          <p className="whitespace-nowrap tex-sm">Sunglasses</p>
          <p className="whitespace-nowrap tex-sm">Home accessories</p>
          <p className="whitespace-nowrap tex-sm">Hair accessories</p>
          <p className="whitespace-nowrap tex-sm">Gloves</p>
          <p className="whitespace-nowrap tex-sm">Smartphone cases</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Highlights</p>
          <p className="whitespace-nowrap tex-sm">New</p>
          <p className="whitespace-nowrap tex-sm">Upcycling</p>
          <p className="whitespace-nowrap tex-sm">Exclusive</p>
          <p className="whitespace-nowrap tex-sm"></p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-3.5">
          {brands.map((brand, index) => {
            return (
              <div key={index} className=" p-4 h-16 bg-black">
                <Image
                  src={brand.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full h-full object-scale-down"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-3">
        <div>
          <Image
            src={`/women/dropdown/accessories/1.jpg`}
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

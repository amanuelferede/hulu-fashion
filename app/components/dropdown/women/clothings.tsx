import { brands } from "@/app/data/women/brands";
import Image from "next/image";
export default function Clothings() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">Dresses</p>
          <p className="whitespace-nowrap tex-sm">Jeans</p>
          <p className="whitespace-nowrap tex-sm">Tops</p>
          <p className="whitespace-nowrap tex-sm">Pants</p>
          <p className="whitespace-nowrap tex-sm">Jackets</p>
          <p className="whitespace-nowrap tex-sm">Jackets</p>
          <p className="whitespace-nowrap tex-sm">Underwear</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          {" "}
          <p className="whitespace-nowrap tex-sm">Blouses and tunics</p>
          <p className="whitespace-nowrap tex-sm">Coats</p>
          <p className="whitespace-nowrap tex-sm">Skirts</p>
          <p className="whitespace-nowrap tex-sm">Swimwear</p>
          <p className="whitespace-nowrap tex-sm">Sweaters and hoodies</p>
          <p className="whitespace-nowrap tex-sm">Blazers</p>
          <p className="whitespace-nowrap tex-sm">Jumpsuits and playsuits</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          {" "}
          <p className="whitespace-nowrap tex-sm">Shop by fit</p>
          <p className="whitespace-nowrap tex-sm">Maternity wear</p>
          <p className="whitespace-nowrap tex-sm">Plus sizes</p>
          <p className="whitespace-nowrap tex-sm">Petite</p>
          <p className="whitespace-nowrap tex-sm">Petite</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Highlights</p>
          <p className="whitespace-nowrap tex-sm">New</p>
          <p className="whitespace-nowrap tex-sm">Trending</p>
          <p className="whitespace-nowrap tex-sm">Exclusive</p>
          <p className="whitespace-nowrap tex-sm">Premium</p>
          <p className="whitespace-nowrap tex-sm">Occasions</p>
          <p className="whitespace-nowrap tex-sm">Upcycling</p>
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
        <Image
          src={`/dropdown/women/clothings/1.jpg`}
          alt="logo"
          sizes="100vh"
          width={0}
          height={0}
          className="w-full"
        />
      </div>
    </div>
  );
}

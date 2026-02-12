import Image from "next/image";
export default function Sales() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="md:col-span-2 col-span-12">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">Explore all</p>
          <p className="whitespace-nowrap tex-sm">Jeans</p>
          <p className="whitespace-nowrap tex-sm">Sweaters & hoodies</p>
          <p className="whitespace-nowrap tex-sm">Sweaters & cardigans</p>
          <p className="whitespace-nowrap tex-sm">Shirts</p>
          <p className="whitespace-nowrap tex-sm">Underwear</p>
          <p className="whitespace-nowrap tex-sm">Underwear</p>
          <p className="whitespace-nowrap tex-sm">Button-up shirts</p>
          <p className="whitespace-nowrap tex-sm"></p>
        </div>
      </div>
      <div className="md:col-span-2 col-span-12">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap tex-sm">Coats</p>
          <p className="whitespace-nowrap tex-sm">Suits & jackets</p>
          <p className="whitespace-nowrap tex-sm">Swimwear</p>
          <p className="whitespace-nowrap tex-sm">Plus sizes</p>
          <p className="whitespace-nowrap tex-sm">Shoes</p>
          <p className="whitespace-nowrap tex-sm">Sportswear</p>
          <p className="whitespace-nowrap tex-sm">Sportswear</p>
          <p className="whitespace-nowrap tex-sm">Premium</p>
          <p className="whitespace-nowrap tex-sm"></p>
        </div>
      </div>
      <div className="md:col-span-7 col-span-12">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Image
              src={`/dropdown/men/sales/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/sales/2.jpg`}
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

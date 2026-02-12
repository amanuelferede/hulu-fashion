import Image from "next/image";
export default function Sales() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">SHOP BY CATEGORIES</p>
          <p className="whitespace-nowrap text-sm">Explore all</p>
          <p className="whitespace-nowrap text-sm">Sweaters & knitwear</p>
          <p className="whitespace-nowrap text-sm">Dresses</p>
          <p className="whitespace-nowrap text-sm">Jeans</p>
          <p className="whitespace-nowrap text-sm">Coats</p>
          <p className="whitespace-nowrap text-sm">Tops</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">Pants</p>
          <p className="whitespace-nowrap text-sm">Underwear</p>
          <p className="whitespace-nowrap text-sm">Skirts</p>
          <p className="whitespace-nowrap text-sm">Blouses & tunics</p>
          <p className="whitespace-nowrap text-sm">Blouses & tunics</p>
          <p className="whitespace-nowrap text-sm">Blazers</p>
          <p className="whitespace-nowrap text-sm">Swimwear</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col space-y-2.5">
          <p className="whitespace-nowrap text-sm">Jumpsuits & playsuits</p>
          <p className="whitespace-nowrap text-sm">Plus sizes</p>
          <p className="whitespace-nowrap text-sm">Maternity wear</p>
          <p className="whitespace-nowrap text-sm">Shoes</p>
          <p className="whitespace-nowrap text-sm">Sportswear</p>
          <p className="whitespace-nowrap text-sm">Accessories</p>
          <p className="whitespace-nowrap text-sm">Premium</p>
        </div>
      </div>

      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src={`/dropdown/women/sale/1.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/sale/2.jpg`}
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

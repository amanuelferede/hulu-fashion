"use client";
import Image from "next/image";
export default function KidMobileMenu() {
  return (
    <div className=" md:px-0 px-2 max-w-7xl mx-auto py-2 md:hidden block">
      <div className="grid grid-cols-3 gap-2">
        <div className="p-3.5 h-36 rounded-xl bg-gray-100">
          <Image
            src={`/kid/mobile/menu/1.jpeg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="p-3.5 h-36 rounded-xl bg-gray-100">
          <Image
            src={`/kid/mobile/menu/2.jpeg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="p-3.5 h-36 rounded-xl bg-gray-100">
          <Image
            src={`/kid/mobile/menu/3.jpeg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="p-3.5 h-36 rounded-xl bg-gray-100">
          <Image
            src={`/kid/mobile/menu/4.jpeg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="p-3.5 h-36 rounded-xl bg-gray-100">
          <Image
            src={`/kid/mobile/menu/5.jpeg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="p-3.5 h-36 rounded-xl bg-gray-100">
          <Image
            src={`/kid/mobile/menu/6.png`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-full object-scale-down"
          />
        </div>
      </div>
    </div>
  );
}

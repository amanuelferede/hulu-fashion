import Image from "next/image";
import { IoTimerOutline } from "react-icons/io5";
export default function Inspiration() {
  return (
    <div className="md:px-0 px-2 lg:max-w-7xl xl:max-w-350 mx-auto py-2">
      <div className="flex flex-col space-y-1 my-3">
        <p>GET INISPIRED</p>
        <p className="md:text-2xl font-bold">Need some inspiration</p>
      </div>
      <div className="md:grid hidden md:grid-cols-4 gap-4">
        <div className="h-80">
          <Image
            src={`/women/inspiration/1.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-80 object-cover"
          />
        </div>
           <div className="h-80">
          <Image
            src={`/women/inspiration/2.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex space-x-2 py-3 bg-gray-200">
          <p>Limited Drops</p>
          <IoTimerOutline className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

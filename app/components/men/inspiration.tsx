import Image from "next/image";
import { IoTimerOutline } from "react-icons/io5";
export default function Inspiration() {
  return (
    <div className="max-w-7xl mx-auto py-2 md:px-0 px-2">
      <p className="mb-1.5">GET INSPIRED</p>
      <p className="md:text-2xl font-semibold mb-2.5">Need some inspiration</p>
      <div className="md:grid hidden grid-cols-4 gap-4">
        <div className="h-80">
          <Image
            src={`/men/inspiration/1.jpg`}
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

import { BiSearch } from "react-icons/bi";

import Babies from "../dropdown/kids/babies";
import Girls from "../dropdown/kids/girls";
import Boys from "../dropdown/kids/boys";
import Brands from "../dropdown/kids/brands";

export default function KidNavBar() {
  return (
    <div className="relative md:block hidden">
      <div className="max-w-309  mt-17 mx-auto flex items-center justify-between">
        <div>
          <div className="flex   items-center   space-x-2">
            <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full px-2 whitespace-nowrap">
              Babies
              <div className="group-hover:block hidden absolute w-full top-12.5 left-0 right-0 z-10">
                <Babies />
              </div>
            </div>
            <div className="group text-[0.968rem] py-2.5  cursor-pointer h-full whitespace-nowrap px-2">
              Girls
              <div className="group-hover:block hidden absolute w-full top-12.5 left-0 right-0 z-10">
                <Girls />
              </div>
            </div>
            <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
              Boys
              <div className="group-hover:block hidden absolute w-full top-12.5 left-0 right-0 z-10">
                <Boys />
              </div>
            </div>
            <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
              Brands
              <div className="group-hover:block hidden absolute w-full top-12.5 left-0 right-0 z-10">
                <Brands />
              </div>
            </div>
          </div>
        </div>
        <div className="py-2.5 ">
          <div className="flex items-center space-x-1 bg-gray-100 p-1.5 ">
            <BiSearch className="w-6 h-6 " />
            <input
              className="focus:outline-none placeholder:text-sm pl-1 pr-7"
              placeholder="Search for items, brands and more"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

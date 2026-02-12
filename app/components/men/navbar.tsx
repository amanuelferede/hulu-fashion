import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdPersonOutline } from "react-icons/md";
import Clothings from "../dropdown/men/clothings";
import Shoes from "../dropdown/men/shoes";
import SportsWears from "../dropdown/men/sportswear";
import Accssories from "../dropdown/men/accessories";
import StreetsWears from "../dropdown/men/streetswear";
import Premium from "../dropdown/men/premum";
import Sales from "../dropdown/men/sale";
import Brands from "../dropdown/men/brands";
import Inspirations from "../dropdown/men/inspirations";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="relative">
      <div className="bg-white/50 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-40">
        <div className="max-w-309 mx-auto flex   items-center border-b border-b-gray-200 py-2 justify-between">
          <div className="flex items-center space-x-8">
            <Link href={`/`} className="py-2">
              Women
            </Link>
            <Link href={`/men`} className="py-2">
              Men
            </Link>
            <Link href={`/kid`} className="py-2">
              Kids
            </Link>
          </div>
          <div className="flex items-center space-x-0.5 py-2 ">
            <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
              Hulu
            </p>
            <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
              Fashion
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <IoWalletOutline className=" w-6.5 h-6.5 text-black" />
            <MdPersonOutline className="w-6.5 h-6.5 text-black" />
            <GoBell className="w-6.5 h-6.5 text-black" />
            <FaRegHeart className="w-6.5 h-6.5 text-black" />
            <LiaShoppingBagSolid className=" w-6.5 h-6.5 text-black" />
          </div>
        </div>
      </div>

      <div className="max-w-309 mx-auto">
        <div className="inline-flex mt-17  items-center   space-x-2">
          <p className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Drops
          </p>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full px-2 whitespace-nowrap">
            Clothing
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Clothings />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5  cursor-pointer h-full whitespace-nowrap px-2">
            Shoes
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Shoes />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Sports Wear
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <SportsWears />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Accessories
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Accssories />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Street Wear
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <StreetsWears />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Primum
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Premium />
            </div>
          </div>

          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            SALE
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Sales />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Top 10
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Brands
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Brands />
            </div>
          </div>
          <div className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2">
            Inspiration
            <div className="group-hover:block hidden absolute w-full top-30 left-0 right-0 z-10">
              <Inspirations />
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
    </div>
  );
}

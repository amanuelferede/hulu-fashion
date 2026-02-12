import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import Clothings from "../dropdown/women/clothings";
import Shoes from "../dropdown/women/shoes";
import SportsWears from "../dropdown/women/sportswear";
import Accssories from "../dropdown/women/accessories";
import StreetsWears from "../dropdown/women/streetswear";
import Premium from "../dropdown/women/premum";
import Sales from "../dropdown/women/sale";
import Brands from "../dropdown/women/brands";
import Inspirations from "../dropdown/women/inspirations";
import Link from "next/link";
import { VscArrowSwap } from "react-icons/vsc";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function WomenNavBar() {
  return (
    <>
      <div className="relative md:block hidden">
        <div className="max-w-309 mx-auto">
          <div className="inline-flex mt-17  items-center   space-x-2">
            <Link
              href={`#`}
              className="group text-[0.968rem] py-2.5 cursor-pointer h-full whitespace-nowrap px-2"
            >
              Drops
            </Link>
            <Link
              href={`/s/women/clothing/`}
              className="group text-[0.968rem] py-2.5 cursor-pointer h-full px-2 whitespace-nowrap"
            >
              Clothing
              <div className="group-focus:hidden group-hover:block  hidden absolute w-full top-30 left-0 right-0 z-10">
                <Clothings />
              </div>
            </Link>
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
              <div className="flex bg-gray-100 items-center space-x-1  text-smbg-gray-100 p-1.5 ">
                <BiSearch className="w-6 h-6 " />
                <input
                  className=" focus:outline-none placeholder:text-sm pl-1 pr-7"
                  placeholder="Search for items, brands and more"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:block hidden  text-white bg-black">
        <div className="max-w-309 mx-auto h-9 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm">
            <MdOutlineShoppingCart className="w-5 h-5" />
            <p>Free shipping</p>
          </div>

          <div className="flex items-center space-x-1 text-sm">
            <VscArrowSwap className="w-5 h-5" />
            <p>30 day return policy</p>
          </div>

          <div className="flex items-center space-x-1 text-sm">
            <RiSecurePaymentLine className="w-5 h-5" />
            <p>Secure payments</p>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdPersonOutline } from "react-icons/md";
import MenNavBar from "../navbar/men";
import WomenNavBar from "../navbar/women";
import KidNavBar from "../navbar/kid";
import { HiBars3 } from "react-icons/hi2";

export default function TopBar() {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  return (
    <>
      <div className="bg-white/50 md:block hidden backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-40">
        <div className="max-w-309 mx-auto flex   items-center border-b border-b-gray-200 py-2 justify-between">
          <div className="flex items-center space-x-8">
            <Link href={`/?gender=female`} className="py-2">
              Women
            </Link>
            <Link href={`/?gender=male`} className="py-2">
              Men
            </Link>
            <Link href={`/?gender=kid`} className="py-2">
              Kids
            </Link>
          </div>
          <Link href={`/`}>
            <div className="flex items-center space-x-0.5 py-2 ">
              <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
                Hulu
              </p>

              <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
                Fashion
              </p>
            </div>
          </Link>
          <div className="flex items-center space-x-8">
            <IoWalletOutline className=" w-6.5 h-6.5 text-black" />
            <MdPersonOutline className="w-6.5 h-6.5 text-black" />
            <GoBell className="w-6.5 h-6.5 text-black" />
            <FaRegHeart className="w-6.5 h-6.5 text-black" />
            <LiaShoppingBagSolid className=" w-6.5 h-6.5 text-black" />
          </div>
        </div>
      </div>

      <div className="px-2 py-2 w-full md:hidden flex items-center justify-between ">
        <div className="flex space-x-1.5">
          <HiBars3 className="w-5.5 h-5.5" />
          <Link href={`/`}>
            <div className="flex items-center space-x-0.5">
              <p className="text-sm font-semibold font-sans py-1 bg-black px-2 text-white ">
                Hulu
              </p>

              <p className="text-sm font-semibold font-sans py-1 bg-black px-2 text-white ">
                Fashion
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <IoWalletOutline className=" w-4.5 h-4.5 text-black" />
          <MdPersonOutline className="w-4.5 h-4.5 text-black" />
          <GoBell className="w-4.5 h-4.5 text-black" />
          <FaRegHeart className="w-4.5 h-4.5 text-black" />
          <LiaShoppingBagSolid className=" w-4.5 h-4.5 text-black" />
        </div>
      </div>

      <div className="md:hidden py-2 flex items-center space-x-3 justify-center">
        <Link href={`/?gender=female`} className="">
          Women
        </Link>
        <Link href={`/?gender=male`} className="">
          Men
        </Link>
        <Link href={`/?gender=kid`} className="">
          Kids
        </Link>
      </div>

      {gender === "male" ? (
        <MenNavBar />
      ) : gender === "female" ? (
        <WomenNavBar />
      ) : gender === "kid" ? (
        <KidNavBar />
      ) : (
        <WomenNavBar />
      )}
    </>
  );
}

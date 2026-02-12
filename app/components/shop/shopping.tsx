import Image from "next/image";
import Link from "next/link";
export default function Shopping() {
  return (
    <>
      {Array.from({ length: 13 }, (el, index) => {
        return (
          <Link href={`/p/brand/productname-3837`} key={index}>
            <div>
              <div className="bg-gray-50">
                <Image
                  src={`/lastseen/${index + 1}.jpg`}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full h-70 object-scale-down p-5"
                />
              </div>
              <div className="flex flex-col text-sm space-y-1.5 items-center">
                <p className="font-semibold">VILA</p>
                <p className="text-center">
                  VILA Blouse &apos;VIEnna Ravenna&apos; in Black
                </p>
                <div className="flex space-x-1.5">
                  <p className="text-red-600 font-semibold">$ 29,90</p>
                  <p>$ 43,90</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

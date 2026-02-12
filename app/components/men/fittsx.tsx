import Image from "next/image";
export default function FindFit() {
  return (
    <div className="lg:max-w-7xl xl:max-w-350 mx-auto py-5">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="">
          <Image
            src={`/women/fit/1.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
        <div className="">
          <Image
            src={`/women/fit/2.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
        <div className="">
          <Image
            src={`/women/fit/3.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
        <div className="">
          <Image
            src={`/women/fit/4.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

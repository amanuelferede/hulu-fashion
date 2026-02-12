import Image from "next/image";
export default function FindFit() {
  return (
    <div className="md:px-0 px-2 max-w-7xl mx-auto py-2">
      <p className="mb-1.5">FIND THE RIGHT FIT</p>
      <p className="md:text-2xl font-semibold mb-2.5">Body type advisior</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="relative">
          <Image
            src={`/women/fit/1.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl left-0 bottom-0 right-0 top-0 bg-linear-to-b from-transparent to-black/95 to-95% p-3.5">
            <p className=" text-white text-lg font-semibold absolute bottom-3 left-3 ">
              Pitite
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={`/women/fit/2.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl left-0 bottom-0 right-0 top-0 bg-linear-to-b from-transparent to-black/95 to-95% p-3.5">
            <p className=" text-white text-lg font-semibold absolute bottom-3 left-3 ">
              All shapes
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src={`/women/fit/3.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl left-0 bottom-0 right-0 top-0 bg-linear-to-b from-transparent to-black/95 to-95% p-3.5">
            <p className=" text-white text-lg font-semibold absolute bottom-3 left-3 ">
              Tall
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={`/women/fit/4.jpg`}
            alt="logo"
            sizes="100vh"
            width={0}
            height={0}
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl left-0 bottom-0 right-0 top-0 bg-linear-to-b from-transparent to-black/95 to-95% p-3.5">
            <p className=" text-white text-lg font-semibold absolute bottom-3 left-3 ">
              Curvy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
export default function Inspirations() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="md:col-span-6 col-span-12">
        <div className="grid grid-cols-4 gap-3">
          <div>
            <Image
              src={`/dropdown/men/inspirations/1.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/2.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/3.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/4.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/5.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/6.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/7.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/men/inspirations/8.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-6 col-span-12">
        <div className="grid grid-cols-3 gap-3">
          <div>
            {" "}
            <Image
              src={`/dropdown/men/inspirations/11.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover "
            />
          </div>
          <div>
            {" "}
            <Image
              src={`/dropdown/men/inspirations/22.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40  object-cover"
            />
          </div>
          <div>
            {" "}
            <Image
              src={`/dropdown/men/inspirations/33.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

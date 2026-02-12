import Image from "next/image";
export default function Inspirations() {
  return (
    <div className=" bg-white grid shadow-md grid-cols-12 gap-5 p-6 pt-5 pl-8 pb-30">
      <div className="col-span-6">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <Image
              src={`/dropdown/women/inspiration/1.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/2.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/3.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/4.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/5.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/6.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/7.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
          <div>
            <Image
              src={`/dropdown/women/inspiration/8.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="grid grid-cols-3 gap-5">
          <div>
            {" "}
            <Image
              src={`/dropdown/women/inspiration/11.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-85 object-cover"
            />
          </div>
          <div>
            {" "}
            <Image
              src={`/dropdown/women/inspiration/22.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-85 object-cover"
            />
          </div>
          <div>
            {" "}
            <Image
              src={`/dropdown/women/inspiration/33.png`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-85 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

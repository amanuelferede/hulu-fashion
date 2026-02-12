import KidNavBar from "@/app/components/navbar/kid";
import MenNavBar from "@/app/components/navbar/men";
import WomenNavBar from "@/app/components/navbar/women";
import TryShopping from "@/app/components/shop/shop";
import SideBar from "@/app/components/shop/sidebar";

export default async function Shop({
  params,
}: {
  params: Promise<{ gender: "male" | "female" | "kid"; slug: string[] }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gender, slug } = await params;
  return (
    <>
      {gender === "female" && <WomenNavBar />}
      {gender === "male" && <MenNavBar />}

      {gender === "kid" && <KidNavBar />}
      <div className="max-w-300 mx-auto flex">
        {<SideBar />}

        <div className=" w-[80%] min-h-screen overflow-y-auto grow">
          <TryShopping />
        </div>
      </div>
    </>
  );
}

import MenHomePage from "./components/homepage/men";
import WomenHomePage from "./components/homepage/women";
import KidHomePage from "./components/homepage/kid";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
  const gender = params?.gender || "";
  return (
<>
      {gender === "male" ? (
        <MenHomePage />
      ) : gender === "female" ? (
        <WomenHomePage />
      ) : gender === "kid" ? (
        <KidHomePage />
      ) : (
        <WomenHomePage />
      )}
    </>

  );
}

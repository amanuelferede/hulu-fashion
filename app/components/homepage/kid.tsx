import Carousel from "../kids/carousel";
import PopularBrands from "../kids/popbrands";
import PopularCategory from "../kids/popularcat";
import Trends from "../kids/trends";
import KidMobileMenu from "../mobile/menu/kid";
import DontMissIt from "../shared/dontmiss";
import LastSeen from "../shared/lastseen";

export default function KidHomePage() {
  return (
    <>
      <Carousel />
      <KidMobileMenu />
      <PopularBrands />
      <LastSeen />

      <Trends />

      <PopularCategory />
      <DontMissIt />
    </>
  );
}

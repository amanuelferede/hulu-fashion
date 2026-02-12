import WomenMobileMenu from "../mobile/menu/women";
import DontMissIt from "../shared/dontmiss";
import LastSeen from "../shared/lastseen";
import Carousel from "../women/carousel";
import CelbCollections from "../women/celebcollects";
import FindFit from "../women/fittsx";
import Inspiration from "../women/inspiration";
import Ocational from "../women/occational";
import PopularBrands from "../women/popbrands";
import PopularCategory from "../women/popularcat";
import Trends from "../women/trends";

export default function WomenHomePage() {
  return (
    <>
      <Carousel />
      <WomenMobileMenu />
      <PopularBrands />
      <LastSeen />
      <FindFit />
      <Inspiration />
      <Trends />
      <Ocational />
      <CelbCollections />
      <PopularCategory />
      <DontMissIt />
    </>
  );
}

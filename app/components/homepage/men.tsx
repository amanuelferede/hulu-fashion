import Carousel from "../men/carousel";
import CelbCollections from "../men/celebcollects";
import Inspiration from "../men/inspiration";
import Ocational from "../men/occational";
import PopularBrands from "../men/popbrands";
import PopularCategory from "../men/popularcat";
import Trends from "../men/trends";
import MenMobileMenu from "../mobile/menu/men";
import DontMissIt from "../shared/dontmiss";
import LastSeen from "../shared/lastseen";

export default function MenHomePage() {
  return (
    <>
      <Carousel />
      <MenMobileMenu />
      <PopularBrands />
      <LastSeen />

      <Inspiration />
      <Trends />
      <Ocational />
      <CelbCollections />
      <PopularCategory />
      <DontMissIt />
    </>
  );
}

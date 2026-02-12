"use client";

import { useParams } from "next/navigation";
import { dressesSubMenu } from "@/app/data/shop/women/menus/clothing/dresses";
import DressesSubMenu from "./dressessubmenu";
import JeansSubMenu from "./jeanssubmenu";
import { jeansSubMenu } from "@/app/data/shop/women/menus/clothing/jeans";
import CoatsSubMenu from "./coatssubmenu";
import { coatsSubMenu } from "@/app/data/shop/women/menus/clothing/coats";
import { jacketsSubMenu } from "@/app/data/shop/women/menus/clothing/jackets";
import SkirtsSubMenu from "./skirtssubmenu";
import { skirtsSubMenu } from "@/app/data/shop/women/menus/clothing/skirts";
import UnderWearSubMenu from "./underwearsubmenu";
import { underWearSubMenu } from "@/app/data/shop/women/menus/clothing/underwears";
import SweaterAndHoodies from "./sweatersandhoodiessubment";
import { sweatersAndHoodies } from "@/app/data/shop/women/menus/clothing/sweatersandhoodies";
import Tops from "./topssubmenu";

import { tops } from "@/app/data/shop/women/menus/clothing/tops";
import { pants } from "@/app/data/shop/women/menus/clothing/pants";
import { occasions } from "@/app/data/shop/women/menus/clothing/occassions";
import { blousesAndTunics } from "@/app/data/shop/women/menus/clothing/blousesandtunics";
import Link from "next/link";
import OccationsSubMenu from "./occationssubmenu";
import BlousesAndtunicsSubMenu from "./blousesandtunicssubmenu";
import PantsSubMenu from "./pantssubmenu";
import JacketsSubMenu from "./jacketssubmenu";
import JumpSuitsAndPlaySuitsSubMenu from "./jumpsuitsandplaysuitssubmenu";
import { PlaySuitsAndJumpSuits } from "@/app/data/shop/women/menus/clothing/jumpsuitsandplaysuits";
import { sweaterAndKintWearSubMenu } from "@/app/data/shop/women/menus/clothing/sweaterandkintwear";
import SweaterAndkintWearSubMenu from "./sweaterandkintwearsubMenu";

export default function ClothingSubMenu({
  clothingSubMenus,
}: {
  clothingSubMenus: {
    name: string;
    value: string;
  }[];
}) {
  const params = useParams<{ slug: string[] }>();
  const slug = params.slug;
  return (
    <div className="flex flex-col space-y-1.5">
      {clothingSubMenus.map((subMenu, index) => {
        return (
          <div key={index}>
            <div>
              <Link
                href={`/x/women/${slug && slug[0]}/${subMenu.value}`}
                className={`${slug && subMenu.value === slug[0] ? "font-semibold" : ""}`}
              >
                {subMenu.name}
              </Link>
            </div>
            {slug && slug[1] === "dresses" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <DressesSubMenu dressesSubMenu={dressesSubMenu} />
              </div>
            )}

            {slug && slug[1] === "jeans" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <JeansSubMenu jeansSubMenu={jeansSubMenu} />
              </div>
            )}

            {slug &&
              slug[1] === "sweaters-kintwear" &&
              subMenu.value === slug[1] && (
                <div className="pl-3 mt-1.5">
                  <SweaterAndkintWearSubMenu
                    sweaterAndKintWearSubMenu={sweaterAndKintWearSubMenu}
                  />
                </div>
              )}
            {slug && slug[1] === "coats" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <CoatsSubMenu coatsSubMenu={coatsSubMenu} />
              </div>
            )}

            {slug && slug[1] === "jackets" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <JacketsSubMenu jacketsSubMenu={jacketsSubMenu} />
              </div>
            )}
            {slug && slug[1] === "skirts" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <SkirtsSubMenu skirtsSubMenu={skirtsSubMenu} />
              </div>
            )}

            {slug && slug[1] === "underwear" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <UnderWearSubMenu underWearSubMenu={underWearSubMenu} />
              </div>
            )}

            {slug &&
              slug[1] === "sweaters-hoodies" &&
              subMenu.value === slug[1] && (
                <div className="pl-3 mt-1.5">
                  <SweaterAndHoodies
                    sweatersAndHoodiesSubMenu={sweatersAndHoodies}
                  />
                </div>
              )}
            {slug &&
              slug[1] === "jumpsuits-playsuits" &&
              subMenu.value === slug[1] && (
                <div className="pl-3 mt-1.5">
                  <JumpSuitsAndPlaySuitsSubMenu
                    jumpSuitsAndPlaySuitsSubMenu={PlaySuitsAndJumpSuits}
                  />
                </div>
              )}
            {slug && slug[1] === "tops" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <Tops topsSubMenu={tops} />
              </div>
            )}
            {slug && slug[1] === "pants" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <PantsSubMenu pantsSubMenu={pants} />
              </div>
            )}
            {slug && slug[1] === "occasions" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <OccationsSubMenu occasionsSubMenu={occasions} />
              </div>
            )}
            {slug &&
              slug[1] === "blouses-tunics" &&
              subMenu.value === slug[1] && (
                <div className="pl-3 mt-1.5">
                  <BlousesAndtunicsSubMenu
                    blousesAndTunicsSubMenu={blousesAndTunics}
                  />
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}

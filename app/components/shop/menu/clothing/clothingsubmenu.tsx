"use client";

import { useParams } from "next/navigation";
import { dressesSubMenu } from "@/app/data/shop/women/menus/clothing/dresses";
import DressesSubMenu from "./dressessubmenu";
import JeansSubMenu from "./jeanssubmenu";
import { jeansSubMenu } from "@/app/data/shop/women/menus/clothing/jeans";
import SweaterAndkintWearSubMenu from "./sweaterandkintwearsubmenu";
import { sweaterAndKintWearSubMenu } from "@/app/data/shop/women/menus/clothing/sweaterandkintwear";
import CoatsSubMenu from "./coatssubmenu";
import { coatsSubMenu } from "@/app/data/shop/women/menus/clothing/coats";
import JacketsSubMenu from "./jacketssubmenu";
import { jacketsSubMenu } from "@/app/data/shop/women/menus/clothing/jackets";
import SkirtsSubMenu from "./skirtssubmenu";
import { skirtsSubMenu } from "@/app/data/shop/women/menus/clothing/skirts";
import UnderWearSubMenu from "./underwearsubmenu";
import { underWearSubMenu } from "@/app/data/shop/women/menus/clothing/underwears";
import SweaterAndHoodies from "./sweatersandhoodiessubment";
import { sweatersAndHoodies } from "@/app/data/shop/women/menus/clothing/sweatersandhoodies";
import Tops from "./topssubmenu";
import { PlaySuitsAndJumpSuits } from "@/app/data/shop/women/menus/clothing/jumpsuitsandplaysuits";
import Pants from "./pants";
import { tops } from "@/app/data/shop/women/menus/clothing/tops";
import { pants } from "@/app/data/shop/women/menus/clothing/pants";
import Occasions from "./occations";
import { occasions } from "@/app/data/shop/women/menus/clothing/occassions";
import BlousesAndtunics from "./blousesandtunics";
import { blousesAndTunics } from "@/app/data/shop/women/menus/clothing/blousesandtunics";
import Link from "next/link";
import JumpSuitsAndPlaySuits from "./jumpsuitsandplaysuitssubmenu";

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
                  <JumpSuitsAndPlaySuits
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
                <Pants pantsSubMenu={pants} />
              </div>
            )}
            {slug && slug[1] === "occasions" && subMenu.value === slug[1] && (
              <div className="pl-3 mt-1.5">
                <Occasions occasionsSubMenu={occasions} />
              </div>
            )}
            {slug &&
              slug[1] === "blouses-tunics" &&
              subMenu.value === slug[1] && (
                <div className="pl-3 mt-1.5">
                  <BlousesAndtunics
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

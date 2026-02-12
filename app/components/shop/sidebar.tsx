"use client";
import { WomenMenu } from "@/app/data/shop/women/menu";
import { useParams } from "next/navigation";
import ClothingSubMenu from "./menu/clothing/clothingsubmenu";
import { clothingSubMenus } from "@/app/data/shop/women/menus/clothing/clothing";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SideBar() {
  const params = useParams<{ slug: string[] }>();
  const slug = params.slug;
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div
      className={`w-[20%] h-full py-6 ${scrollPosition >= 920 ? "sticky -top-full" : ""}`}
    >
      <div className="flex flex-col space-y-1.5">
        {WomenMenu.map((category, index) => {
          return (
            <div key={index}>
              <div>
                <Link
                  href={`/x/women/${category.value}`}
                  className={`text-lg  font-semibold ${slug && slug[0] === category.value ? "text-black" : "text-zinc-500"}`}
                >
                  {category.subMenu}
                </Link>
              </div>
              {slug && slug[0] === "clothing" && slug[0] === category.value && (
                <div className="pl-3">
                  <ClothingSubMenu clothingSubMenus={clothingSubMenus} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

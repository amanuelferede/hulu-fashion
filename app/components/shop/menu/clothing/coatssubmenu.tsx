"use client";

import { useParams } from "next/navigation";

export default function CoatsSubMenu({
  coatsSubMenu,
}: {
  coatsSubMenu: {
    name: string;
    value: string;
  }[];
}) {
  const params = useParams<{
    cat: string;
    subcat: string;
    itemcat: string;
    itemsubcat: string;
  }>();
  return (
    <div className="flex flex-col space-y-1.5 text-sm font-medium">
      {coatsSubMenu.map((subMenu, index) => {
        return (
          <div key={index}>
            <div>
              <p className="">{subMenu.name}</p>
            </div>
            {subMenu.name.toLowerCase() === "dresses" &&
              subMenu.name.toLowerCase() === params.itemsubcat && (
                <div className="pl-3">
                  <p>bla</p>
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}

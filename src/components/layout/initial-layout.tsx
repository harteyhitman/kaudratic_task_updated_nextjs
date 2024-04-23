"use client"

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { portal } from "@/data/data";

interface Portal {
  id: string;
  portalIcons: JSX.Element;
  portalNames: string;
}

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-row ">
      <div className="scroll_panel gap-6 flex items-center flex-col  pr-4 pt-3 border-r-tintBlue border-r-4 ml-3">

        {portal.map((portals: Portal, index: number) => (
          <Link href={`#`} key={portals.id}>
            <div onClick={() => handleClick(index)} className={`container ${clickedIndex === index ? 'red_bg' : ''} icons_img border-solid border-4 border-borderLine flex flex-col   items-center rounded-xl gap-4 hover:bg-hovering hover:border-hoveringBorderLine cursor-pointer w-10 h-10`}>
              <div className=' flex items-center flex-col justify-center mt-1.5'>{portals.portalIcons}</div>
              <div className="portal_text flex justify-center  items-center">
                <h2 className="portal_list text-center text-textColor mt-2 font-medium">{portals.portalNames}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Layout;

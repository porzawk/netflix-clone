"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { categories, genres } from "../constants";

type MenuItemProps = {
  id: string | number;
  title: string;
  icon: JSX.Element;
};

const MenuItem = ({ id, title, icon }: MenuItemProps) => {
  const pathname = usePathname();
  const IconWithCustomSize = React.cloneElement(icon, {
    size: 24,
  });
  return (
    <li>
      <Link
        href={`/movies/${id}`}
        className={`flex items-center p-2 px-3 text-base font-normal text-gray-900 rounded-lg ${
          pathname?.includes(`/movies/${id}`) ? "bg-red-700" : ""
        } dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-red-700`}
      >
        {IconWithCustomSize}
        <span className="ml-3">{title}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-screen  transition-transform -translate-x-full sm:translate-x-0 ">
      <div className="h-full overflow-y-auto bg-gray-50 dark:bg-[#121212] scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#1f1f1f]">
        {/* <IconContext.Provider value={{ size: "24px" }}> */}
        <div className="flex justify-center py-5">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="space-y-1">
          <p className="text-gray-500 ml-3">Categories</p>
          {categories.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
        <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="space-y-1">
          <p className="text-gray-500 ml-3">Genres</p>
          {genres.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
        {/* </IconContext.Provider> */}
      </div>
    </aside>
  );
};

export default Sidebar;

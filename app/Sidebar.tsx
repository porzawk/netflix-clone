import Image from "next/image";
import React, { ReactNode } from "react";
import { categories, genres } from "../constants";

type MenuItemProps = {
  index: number;
  id: string | number;
  title: string;
  icon: ReactNode;
};

const MenuItem = ({ index, id, title, icon }: MenuItemProps) => {
  return (
    <li key={index}>
      <a
        href={`#${id}`}
        className="flex items-center p-2 px-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {icon}
        <span className="ml-3">{title}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-screen  transition-transform -translate-x-full sm:translate-x-0 ">
      <div className="h-full overflow-y-auto bg-gray-50 dark:bg-[#121212] scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#1f1f1f]">
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
            <MenuItem index={index} {...item} />
          ))}
        </ul>
        <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="space-y-1">
          <p className="text-gray-500 ml-3">Genres</p>
          {genres.map((item, index) => (
            <MenuItem index={index} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

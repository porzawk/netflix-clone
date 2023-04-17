import React from "react";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  character: string;
  profilePath: string | undefined | null;
};

const CastCard = ({ id, name, character, profilePath }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transition-transform hover:scale-105">
      <div className="flex w-40 flex-col justify-start h-full pb-2">
        <Image
          src={
            profilePath
              ? `${process.env.NEXT_TMDB_IMAGE_URL}/${profilePath}`
              : "/no-photos.png"
          }
          alt={name}
          className="rounded-t-lg"
          width={208}
          height={208}
        />
        <div className="p-2">
          <h5 className="text-base text-center whitespace-normal font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="text-sm text-center whitespace-normal tracking-tight text-gray-900 dark:text-gray-500">
            {character}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CastCard;

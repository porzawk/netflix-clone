import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: number;
};

const MovieCard = ({
  id,
  title,
  releaseDate,
  posterPath,
  voteAverage,
}: Props) => {
  const year = releaseDate.split("-")[0];
  return (
    <div className="max-w-sm w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={`${process.env.NEXT_TMDB_IMAGE_URL}/${posterPath}`}
          alt={title}
          className="rounded-t-lg"
          width={208}
          height={208}
        />
      </a>
      <div className="p-2">
        <a href="#">
          <h5 className="text-base whitespace-normal font-bold tracking-tight text-gray-900 dark:text-white">
            {title} ({year})
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {releaseDate}
        </p> */}
      </div>
    </div>
  );
};

export default MovieCard;

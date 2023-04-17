import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScoreRating from "./ScoreRating";

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
    <div className="max-w-sm w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transition-transform hover:scale-105">
      <div className="flex flex-col justify-between h-full pb-2">
        <Link href={`/movies/detail/${id}`}>
          <Image
            src={`${process.env.NEXT_TMDB_IMAGE_URL}/${posterPath}`}
            alt={title}
            className="rounded-t-lg"
            width={208}
            height={208}
          />
          <div className="p-2">
            <h5 className="text-base text-center whitespace-normal font-bold tracking-tight text-gray-900 dark:text-white">
              {title} ({year})
            </h5>
          </div>
        </Link>
        <ScoreRating rating={voteAverage} />
      </div>
    </div>
  );
};

export default MovieCard;

import React from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import Image from "next/image";
import ScoreRating from "../../[category]/ScoreRating";
import CastCard from "./CastCard";

dayjs.extend(duration);

type Props = {
  params: {
    id: string;
  };
};

interface IDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: any;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ICredit {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

const fetchMovieDetail = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_TMDB_API_URL}/movie/${id}?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`,
    { cache: "no-store" }
  );
  const detail: IDetail = await res.json();
  return detail;
};

const fetchCredits = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_TMDB_API_URL}/movie/${id}/credits?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`,
    { cache: "no-store" }
  );
  const credit: ICredit = await res.json();
  return credit;
};

const Detail = async ({ params: { id } }: Props) => {
  const movieDetail = await fetchMovieDetail(id);
  const credite = await fetchCredits(id);

  // Convert minut to hour min
  let totalSeconds = movieDetail.runtime * 60;
  const totalHours = Math.floor(totalSeconds / (60 * 60));
  totalSeconds = totalSeconds - totalHours * 60 * 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const year = movieDetail.release_date.split("-")[0];

  return (
    <div className="w-full flex gap-4 px-36 py-10">
      <div>
        <Image
          src={`${process.env.NEXT_TMDB_IMAGE_ORINAL_URL}${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="rounded-2xl border border-gray-600"
          width="400"
          height="500"
        />
      </div>
      <div className="flex flex-col relative">
        <Image
          src={`${process.env.NEXT_TMDB_IMAGE_ORINAL_URL}${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          className="rounded-t-lg bg-gradient-to-b from-blue-400 to-transparent relative"
          width="800"
          height="1000"
        />
        <div className="dark:bg-gradient-to-t from-black w-[800px] relative p-4 -top-28">
          {/* Title */}
          <h3 className="text-3xl font-bold">
            {movieDetail.title} ({year})
          </h3>
          {/* Sub title */}
          <div className="flex justify-between mb-3">
            <div className="flex gap-3 items-center">
              <h6>
                {totalHours}h{totalMinutes}m
              </h6>
              <div className="flex gap-1">
                {movieDetail.spoken_languages.map((item, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <h2 className="font-bold">Score:</h2>
              <ScoreRating rating={movieDetail.vote_average} />
            </div>
          </div>
          {/* Overview */}
          <div className="flex flex-col mb-3">
            <h1 className="font-bold text-xl">Overview</h1>
            <h1>{movieDetail.overview}</h1>
          </div>
          {/* Top Cast */}
          <div className="flex flex-col mb-3">
            <h1 className="font-bold text-xl">Top Cast</h1>
            <div className="flex flex-1 w-[770px] p-4  gap-2 overflow-auto scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#1f1f1f]">
              {credite.cast.map((item, index) => (
                <CastCard
                  key={index}
                  id={item.id}
                  name={item.name}
                  character={item.character}
                  profilePath={item.profile_path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

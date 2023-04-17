import React from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { IDetail, ICredit, IVideo, IKeyword, IExternal } from "types/movie";
import Image from "next/image";
import ScoreRating from "../../[category]/ScoreRating";
import CastCard from "./CastCard";
import Trailer from "./Trailer";
import Social from "./Social";

dayjs.extend(duration);

type Props = {
  params: {
    id: string;
  };
};

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

const fetchVideos = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_TMDB_API_URL}/movie/${id}/videos?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`,
    { cache: "no-store" }
  );
  const video: IVideo = await res.json();
  return video;
};

const fetchKeywords = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_TMDB_API_URL}/movie/${id}/keywords?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`,
    { cache: "no-store" }
  );
  const keyword: IKeyword = await res.json();
  return keyword;
};

const fetchExternalIds = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_TMDB_API_URL}/movie/${id}/external_ids?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`,
    { cache: "no-store" }
  );
  const externalId: IExternal = await res.json();
  return externalId;
};

const Detail = async ({ params: { id } }: Props) => {
  const movieDetail = await fetchMovieDetail(id);
  const credit = await fetchCredits(id);
  const video = await fetchVideos(id);
  const keyword = await fetchKeywords(id);
  const externalId = await fetchExternalIds(id);

  // Convert minut to hour min
  let totalSeconds = movieDetail.runtime * 60;
  const totalHours = Math.floor(totalSeconds / (60 * 60));
  totalSeconds = totalSeconds - totalHours * 60 * 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const year = movieDetail.release_date.split("-")[0];

  return (
    <div className="w-full flex gap-4 px-36 py-10">
      <div className="flex flex-col gap-2">
        <Image
          src={`${process.env.NEXT_TMDB_IMAGE_ORINAL_URL}${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="rounded-2xl border border-gray-600"
          width="400"
          height="500"
        />
        <Social
          facebook={externalId.facebook_id}
          instagram={externalId.instagram_id}
          twitter={externalId.twitter_id}
        />
        {/* Movie Info */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="font-bold">Status</p>
            <p className="text-sm text-gray-400">{movieDetail.status}</p>
          </div>
          <div>
            <p className="font-bold">Original Language</p>
            <p className="text-sm text-gray-400">
              {movieDetail.original_language}
            </p>
          </div>
          <div>
            <p className="font-bold">Budget</p>
            <p className="text-sm text-gray-400">{movieDetail.budget}</p>
          </div>
          <div>
            <p className="font-bold">Revenue</p>
            <p className="text-sm text-gray-400">{movieDetail.revenue}</p>
          </div>
        </div>
        {/* Keyword */}
        <p className="font-bold">Keywords</p>
        <div className="flex flex-wrap w-[400px] gap-2">
          {keyword.keywords.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col relative">
        <Image
          src={`${process.env.NEXT_TMDB_IMAGE_ORINAL_URL}${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          className="rounded-t-lg bg-gradient-to-b from-blue-400 to-transparent relative"
          width="800"
          height="1000"
        />
        <div className=" w-[800px] relative -top-28">
          <div className="bg-gradient-to-t from-black via-black  w-full p-4">
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
                <div className="flex gap-1 flex-wrap">
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
                <h2>({movieDetail.vote_count})</h2>
              </div>
            </div>
            {/* Overview */}
            <div className="flex flex-col mb-3">
              <h1 className="font-bold text-xl">Overview</h1>
              <h1>{movieDetail.overview}</h1>
            </div>
          </div>

          <Trailer videos={video.results} />
          {/* Top Cast */}
          <div className="flex flex-col mb-3 p-4">
            <h1 className="font-bold text-xl">Top Cast</h1>
            <div className="flex flex-1 w-[770px] p-4  gap-2 overflow-auto scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#1f1f1f]">
              {credit.cast.map((item, index) => (
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

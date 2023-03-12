import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  params: {
    category: string;
  };
};

interface IMovie {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const fetchMovies = async (category: string | number) => {
  const res = await fetch(
    `${process.env.NEXT_TMDB_API_URL}/movie/${category}?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`,
    { next: { revalidate: 30 } }
  );
  const movie: IMovie = await res.json();
  return movie;
};

const Movies = async ({ params: { category } }: Props) => {
  const movie = await fetchMovies(category);
  return (
    <div className="flex flex-wrap gap-5">
      {movie.results.map((item: Result, index) => (
        <MovieCard
          key={index}
          id={item.id}
          title={item.title}
          releaseDate={item.release_date}
          posterPath={item.poster_path}
          voteAverage={item.vote_average}
        />
      ))}
    </div>
  );
};

export default Movies;

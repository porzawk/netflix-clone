import React from "react";
import MovieCard from "./MovieCard";
import { IMovie, IResult } from "types/movie";
import { categories } from "@/constants/index";

type Props = {
  params: {
    category: string;
  };
};

const fetchMovies = async (category: string) => {
  let url = `${process.env.NEXT_TMDB_API_URL}/movie/${category}?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US`;
  if (!categories.some((item) => item.id === category)) {
    url = `${process.env.NEXT_TMDB_API_URL}/discover/movie?api_key=${process.env.NEXT_TMDB_API_KEY}&language=en-US&with_genres=${category}`;
  }
  const res = await fetch(url, { next: { revalidate: 30 } });
  const movie: IMovie = await res.json();
  return movie;
};

const Movies = async ({ params: { category } }: Props) => {
  const movie = await fetchMovies(category);
  return (
    <div className="flex flex-wrap gap-5">
      {movie.results.map((item: IResult, index) => (
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

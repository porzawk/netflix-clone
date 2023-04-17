//* ------------- Movie List -------------------*//
export interface IMovie {
  dates: IDates;
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}

export interface IDates {
  maximum: string;
  minimum: string;
}

export interface IResult {
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

//* ------------- Movie Detail -------------------*//
export interface IDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: any;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

//* ------------- Movie Credit -------------------*//
export interface ICredit {
  id: number;
  cast: ICast[];
}

export interface ICast {
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

//* ------------- Movie Video -------------------*//
export interface IVideo {
  id: number;
  results: IVideos[];
}

export interface IVideos {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

//* ------------- Movie Keyword -------------------*//
export interface IKeyword {
  id: number;
  keywords: IKeywords[];
}

export interface IKeywords {
  id: number;
  name: string;
}

//* ------------- Movie External -------------------*//
export interface IExternal {
  id: number;
  imdb_id: string;
  wikidata_id: any;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

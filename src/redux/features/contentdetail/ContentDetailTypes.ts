export interface ContentDetailsGenreObjectType {
  name: string;
  id: number;
}

export interface ContentDetailObjectTypes {
  backdrop_path: string;
  poster_path: string;
  original_title?: string;
  original_name?: string;
  origin_country: string[];
  genres: ContentDetailsGenreObjectType[];
  runtime?: number;
  episode_run_time?: number;
  vote_average: number;
  tagline: string;
  overview: string;
  release_date?:string;
  first_air_date?:string;
  id:number;
}

export interface ContentDetailType {
  data: ContentDetailObjectTypes;
  credits: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

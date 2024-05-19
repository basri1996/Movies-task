export interface ContentDetailsGenreObjectType {
  name: string;
  id: number;
}
export interface AuthorDetails {
  avatar_path:string
}

export interface ReviewObjectType{
  content:string;
  author:string;
  author_details:AuthorDetails;
  created_at:string;
  id:string;
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
  similarMovies:any;
  reviews:ReviewObjectType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

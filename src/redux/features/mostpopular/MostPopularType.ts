export interface MostPopularType {
  id: number;
  original_name?: string;
  original_title?: string;
  vote_average: number;
  poster_path?: string;
  profile_path?:string
}

export interface MostPopular {
  movie: {
    movieData: MostPopularType[];
    moviesStatus: "idle" | "loading" | "succeeded" | "failed";
    moviesError: string | null;
  };
  tv: {
    tvSerialData: MostPopularType[];
    tvSerialStatus: "idle" | "loading" | "succeeded" | "failed";
    tvSerialError: string | null;
  };
}

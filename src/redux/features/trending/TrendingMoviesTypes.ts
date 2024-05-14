export interface MoviesData {
    id: number; 
    original_title: string; 
    backdrop_path: string;
  }
  
  export interface TrendingMovies {
    movieData: MoviesData[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    filmUrl: string;
    videoModalOpen: boolean;
  }
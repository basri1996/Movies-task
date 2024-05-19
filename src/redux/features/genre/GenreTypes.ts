export interface Genre {
  name: string;
  id: number;
}
export interface GenreState {
  genre: Genre[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  contentGenre:any;
}

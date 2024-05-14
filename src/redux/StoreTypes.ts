import { MostPopular } from "./features/mostpopular/MostPopularType";
import { TrendingMovies } from "./features/trending/TrendingMoviesTypes";
import { Search } from "./features/search/SearchTypes";
import { ContentDetailType } from "./features/contentdetail/ContentDetailTypes";
import { GenreState } from "./features/genre/GenreTypes";

export interface RootState {
  trendingMovies: TrendingMovies;
  genre: GenreState;
  mostPopular: MostPopular;
  search: Search;
  contentdetail: ContentDetailType;
}

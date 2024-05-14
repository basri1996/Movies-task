import { configureStore } from "@reduxjs/toolkit";
import TrendingMoviesReducer from "../features/trending/TrendingMoviesSlice";
import GenreReducer from "../features/genre/GenreSlice";
import MostPopularReducer from "../features/mostpopular/MostPopularSlice";
import SearchReducer from "../features/search/SearchSlice";
import ContentDetailReducer from "../features/contentdetail/ContentDetailSlice";


const store = configureStore({
  reducer: {
    trendingMovies: TrendingMoviesReducer,
    genre: GenreReducer,
    mostPopular: MostPopularReducer,
    search: SearchReducer,
    contentdetail: ContentDetailReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;


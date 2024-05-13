import { configureStore } from "@reduxjs/toolkit";
import TrendingMoviesReducer from "./features/trending/TrendingMoviesSlice";
import GenreReducer from "./features/genre/GenreSlice"
import MostPopularReducer from "./features/mostpopular/MostPopularSlice"
import SearchReducer from "./features/search/SearchSlice"

const store = configureStore({
  reducer: {
    trendingMovies: TrendingMoviesReducer,
    genre:GenreReducer,
    mostPopular:MostPopularReducer,
    search:SearchReducer
  },
});

export default store;
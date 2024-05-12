import { configureStore } from "@reduxjs/toolkit";
import TrendingMoviesReducer from "./slices/TrendingMoviesSlice";
import GenreReducer from "./slices/GenreSlice"
import MostPopularReducer from "./slices/MostPopularSlice"
import SearchReducer from "./slices/SearchSlice"

const store = configureStore({
  reducer: {
    trendingMovies: TrendingMoviesReducer,
    genre:GenreReducer,
    mostPopular:MostPopularReducer,
    search:SearchReducer
  },
});

export default store;
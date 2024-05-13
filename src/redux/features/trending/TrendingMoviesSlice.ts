import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieTrailerAsync, fetchTrendyMoviesAsync } from "./TrendingMoviesThunk";

interface TrendingMovies {
  data: Object[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filmUrl: string;
  videoModalOpen: boolean;
}

const initialState: TrendingMovies = {
  data: [],
  status: "idle",
  error: null,
  filmUrl: "",
  videoModalOpen: false,
};


const TrendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {
    setFilmUrl(state, action) {
      state.filmUrl = action.payload;
    },
    triggerVideoModal(state) {
      state.videoModalOpen = !state.videoModalOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendyMoviesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendyMoviesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTrendyMoviesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      })
      .addCase(fetchMovieTrailerAsync.fulfilled, (state, action) => {
        state.filmUrl = action.payload;
        state.videoModalOpen = true;
      });
  },
});

export const { setFilmUrl, triggerVideoModal } = TrendingMoviesSlice.actions;

export default TrendingMoviesSlice.reducer;

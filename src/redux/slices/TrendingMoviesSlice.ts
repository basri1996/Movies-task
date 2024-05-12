import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/api";

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

export const fetchTrendyMoviesAsync = createAsyncThunk(
  "trendingMovies/fetchTrendyMovies",
  async () => {
    try {
      const response = await axiosInstance.get(
        "trending/movie/day?language=en-US"
      );
      return response?.data.results;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMovieTrailerAsync = createAsyncThunk(
  "trendingMovies/fetchMovieTrailer",
  async (movieId: string) => {
    try {
      const response = await axiosInstance.get(
        `movie/${movieId}/videos?language=en-US`
      );
      const Url = `https://www.youtube.com/embed/${response.data.results[1]?.key}`;
      return Url;
    } catch (error) {
      throw error;
    }
  }
);

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

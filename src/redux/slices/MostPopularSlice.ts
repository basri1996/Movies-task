import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance,} from "../../api/api";

interface MainState {
  movieData: Object[];
  moviesStatus: "idle" | "loading" | "succeeded" | "failed";
  moviesError: string | null;
  tvSerialData: Object[];
  tvSerialStatus: "idle" | "loading" | "succeeded" | "failed";
  tvSerialError: string | null;
}

// Initial state
const initialState: MainState = {
  movieData: [],
  moviesStatus: "idle",
  moviesError: null,
  tvSerialData: [],
  tvSerialStatus: "idle",
  tvSerialError: null,
};

// Async thunks

export const fetchMostPopularAsync = createAsyncThunk(
  "mostPopular/fetchMostPopular",
  async (mediaType: "movie" | "tv") => {
    try {
      const response = await axiosInstance.get(
        `${mediaType}/popular?language=en-US&page=1`
      );
      if (mediaType === "movie") {
        const filteredMovies = response?.data.results.filter(
          (item: any) => item.original_title !== "Un père idéal"
        );
        return { data: filteredMovies, title: mediaType };
      } else {
        return { data: response?.data.results, title: mediaType };
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

// Slice
const MostPopularSlice = createSlice({
  name: "mostPopular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMostPopularAsync.pending, (state) => {
        state.moviesStatus = "loading";
      })
      .addCase(fetchMostPopularAsync.fulfilled, (state, action) => {
        state.moviesStatus = "succeeded";
        action.payload.title === "movie"
          ? (state.movieData = action.payload.data)
          : (state.tvSerialData = action.payload.data);
      })
      .addCase(fetchMostPopularAsync.rejected, (state, action) => {
        state.moviesStatus = "failed";
        state.moviesError = action.error.message ?? "An error occurred";
      });
  },
});

export default MostPopularSlice.reducer;

import {  createSlice } from "@reduxjs/toolkit";
import { fetchMostPopularAsync } from "./MostPopularThunk";

interface MostPopular {
  movieData: Object[];
  moviesStatus: "idle" | "loading" | "succeeded" | "failed";
  moviesError: string | null;
  tvSerialData: Object[];
  tvSerialStatus: "idle" | "loading" | "succeeded" | "failed";
  tvSerialError: string | null;
}

const initialState: MostPopular = {
  movieData: [],
  moviesStatus: "idle",
  moviesError: null,
  tvSerialData: [],
  tvSerialStatus: "idle",
  tvSerialError: null,
};



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

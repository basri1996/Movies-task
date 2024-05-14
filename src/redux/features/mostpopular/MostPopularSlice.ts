import {  createSlice } from "@reduxjs/toolkit";
import { fetchMostPopularAsync } from "./MostPopularThunk";
import { MostPopular } from "./MostPopularType";


const initialState: MostPopular = {
  movie:{
    movieData: [],
    moviesStatus: "idle",
    moviesError: null,
  },
  tv:{
    tvSerialData: [],
    tvSerialStatus: "idle",
    tvSerialError: null,
  }
  
};


const MostPopularSlice = createSlice({
  name: "mostPopular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMostPopularAsync.pending, (state) => {
        state.movie.moviesStatus = "loading";
      })
      .addCase(fetchMostPopularAsync.fulfilled, (state, action) => {
        state.movie.moviesStatus = "succeeded";
        action.payload.title === "movie"
          ? (state.movie.movieData = action.payload.data)
          : (state.tv.tvSerialData = action.payload.data);
      })
      .addCase(fetchMostPopularAsync.rejected, (state, action) => {
        state.movie.moviesStatus = "failed";
        state.movie.moviesError = action.error.message ?? "An error occurred";
      });
  },
});

export default MostPopularSlice.reducer;

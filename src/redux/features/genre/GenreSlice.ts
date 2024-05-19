import { createSlice } from "@reduxjs/toolkit";
import { fetchAllGenresAsync, fetchGenresAsync } from "./GenreThunk";
import { GenreState } from "./GenreTypes";


const initialState: GenreState = {
  genre: [],
  status: "idle",
  error: null,
  contentGenre:[]
};

const GenreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchAllGenresAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllGenresAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.genre = action.payload;
      })
      .addCase(fetchAllGenresAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      })
      .addCase(fetchGenresAsync.fulfilled, (state, action) => {
        state.contentGenre = action.payload;
      });
  },
});

export default GenreSlice.reducer;

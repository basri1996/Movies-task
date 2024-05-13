import { createSlice } from "@reduxjs/toolkit";
import { fetchAllGenresAsync } from "./GenreThunk";

interface Genre {
  genre: Object[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: Genre = {
  genre: [],
  status: "idle",
  error: null,
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
      });
  },
});

export default GenreSlice.reducer;

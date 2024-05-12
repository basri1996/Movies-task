import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/api";

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

export const fetchAllGenresAsync = createAsyncThunk(
  "genre/fetchAllGenres",
  async () => {
    try {
      const movieGenresresponse = await axiosInstance.get(
        `genre/movie/list?language=en`
      );
      const tvGenresresponse = await axiosInstance.get(
        `genre/tv/list?language=en`
      );
      const result = [
        ...movieGenresresponse?.data.genres,
        ...tvGenresresponse?.data.genres,
      ].map((item) => JSON.stringify(item));
      const filteredresult = [...new Set(result)].map((item) =>
        JSON.parse(item)
      );
      return filteredresult;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

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

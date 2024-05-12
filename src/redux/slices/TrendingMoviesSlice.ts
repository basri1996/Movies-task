import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance} from "../../api/api";

interface MainState {
  data: Object[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filmUrl:string
}

// Initial state
const initialState: MainState = {
  data: [],
  status: "idle",
  error: null,
  filmUrl:""
};

// Async thunks
export const fetchTrendyMoviesAsync = createAsyncThunk(
  "trendingMovies/fetchTrendyMovies",
  async () => {
    try {
      const response = await axiosInstance.get("trending/movie/day?language=en-US");
      return response?.data.results;
    } catch (error) {
      throw error; 
    }
  }
);

// Slice
const TrendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {
    setFilmUrl(state, action){
      state.filmUrl=action.payload
    }
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
      });
  },
});

export const { setFilmUrl } = TrendingMoviesSlice.actions;


export default TrendingMoviesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchByIdAsync, fetchCreditsByIdAsync, fetchReviewsById, fetchSimilarByIdAsync} from "./ContentDetailThunk";
import { ContentDetailType } from "./ContentDetailTypes";

const initialState: ContentDetailType = {
  data: {
    backdrop_path: "",
    poster_path: "",
    origin_country: [],
    genres: [],
    vote_average: 0,
    tagline: "",
    overview: "",
    id: 0
  },
  credits: [],
  similarMovies:[],
  reviews:[],
  status: "idle",
  error: null,
};

const ContentDetailSlice = createSlice({
  name: "contentdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      })
      .addCase(fetchCreditsByIdAsync.fulfilled, (state, action) => {
        state.credits = action.payload;
      })
      .addCase(fetchSimilarByIdAsync.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
      })
      .addCase(fetchReviewsById.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
  },
});



export default ContentDetailSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchByIdAsync, fetchCreditsByIdAsync } from "./ContentDetailThunk";
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
      });
  },
});

fetchCreditsByIdAsync;

export default ContentDetailSlice.reducer;

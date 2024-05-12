import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/api";

interface Search {
  data: Object[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  inputValue: string;
  searchedModalOpen: boolean;
}

const initialState: Search = {
  data: [],
  status: "idle",
  error: null,
  inputValue: "",
  searchedModalOpen: false,
};

export const fetchSearchedAsync = createAsyncThunk(
  "search/fetchSearched",
  async (title: string) => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await axiosInstance.get(
        `search/multi?query=${title}&api_key=${apiKey}`
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearched(state) {
      state.data = [];
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    triggerSearchedModal(state) {
      state.searchedModalOpen = !state.searchedModalOpen;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchSearchedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchedAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.searchedModalOpen = state.data && true;
      })
      .addCase(fetchSearchedAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { clearSearched, setInputValue, triggerSearchedModal } =
  SearchSlice.actions;

export default SearchSlice.reducer;

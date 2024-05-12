import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance} from "../../api/api";

interface MainState {
  data: Object[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  inputValue:string
}

// Initial state
const initialState: MainState = {
  data: [],
  status: "idle",
  error: null,
  inputValue:""
};

// Async thunks

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

// Slice
const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearched(state) {
      state.data = [];
    },
    setInputValue(state ,action) {
      state.inputValue = action.payload
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchSearchedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchedAsync.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchSearchedAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { clearSearched,setInputValue } = SearchSlice.actions;

export default SearchSlice.reducer;

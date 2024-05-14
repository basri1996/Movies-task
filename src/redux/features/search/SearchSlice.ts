import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchedAsync } from "./SearchThunk";
import { Search } from "./SearchTypes";



const initialState: Search = {
  data: [],
  status: "idle",
  error: null,
  inputValue: "",
  searchedModalOpen: false,
};


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

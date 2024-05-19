import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContentByExpandSearchAsync,
  fetchContentPageItemsByCategoryAsync,
  fetchKeywordsAsync,
  fetchSearchContentByTypeAndTitleAsync,
  fetchSearchLanguageAsync,
  fetchSearchedAsync,
} from './SearchThunk';
import { Search } from './SearchTypes';

const initialState: Search = {
  data: [],
  dataAmount:"",
  movie: {
    amount: '',
    data: [],
  },
  tv: {
    amount: '',
    data: [],
  },
  status: 'idle',
  error: null,
  searchedModalOpen: false,
  searchLanguage: [],
  keywords: [],
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearched(state) {
      state.data = [];
    },
    triggerSearchedModal(state, action) {
      state.searchedModalOpen = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchSearchedAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSearchedAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSearchedAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      })
      .addCase(fetchSearchLanguageAsync.fulfilled, (state, action) => {
        state.searchLanguage = action.payload;
      })
      .addCase(fetchKeywordsAsync.fulfilled, (state, action) => {
        state.keywords = action.payload;
      })
      .addCase(fetchContentByExpandSearchAsync.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.dataAmount =action.payload.amount
      })
      .addCase(
        fetchSearchContentByTypeAndTitleAsync.fulfilled,
        (state, action) => {
          const { data, amount, type } = action.payload;
          if (type === 'movie') {
            state.movie.data = data;
            state.movie.amount = amount;
          } else {
            state.tv.data = data;
            state.tv.amount = amount;
          }
        },
      ).addCase(fetchContentPageItemsByCategoryAsync.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.dataAmount =action.payload.amount
      });
  },
});

export const { clearSearched, triggerSearchedModal } = SearchSlice.actions;

export default SearchSlice.reducer;

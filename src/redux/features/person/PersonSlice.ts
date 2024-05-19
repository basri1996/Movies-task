import { createSlice } from '@reduxjs/toolkit';
import { fetchPersonDetailsAsync } from './PersonThunk';

const initialState: any = {
  personsDetail: {},
  status: 'idle',
  error: null,
};

const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPersonDetailsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPersonDetailsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.personsDetail=action.payload
      })
      .addCase(fetchPersonDetailsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default PersonSlice.reducer;

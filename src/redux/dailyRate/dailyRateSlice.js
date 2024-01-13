import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate } from './dailyRateOperations';

const dailyRateInitialState = {
  dailyRate: null,
  notAllowedProducts: [],
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: dailyRateInitialState,

  extraReducers: builder => {
    builder
      .addCase(getDailyRate.pending, (state, _) => state)
      .addCase(getDailyRate.fulfilled, (state, { payload }) => {
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(getDailyRate.rejected, (state, _) => state);
  },
});

export const dailyRateReducer = dailyRateSlice.reducer;

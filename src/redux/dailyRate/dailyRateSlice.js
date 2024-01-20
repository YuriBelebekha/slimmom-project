import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate, getDailyRateByUserId } from './dailyRateOperations';

const dailyRateInitialState = {
  dailyRate: null,
  notAllowedProducts: [],
  isLoading: false,
  summaries: [],
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: dailyRateInitialState,

  extraReducers: builder => {
    // Daily rate WITHOUT user id
    builder
      .addCase(getDailyRate.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getDailyRate.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(getDailyRate.rejected, (state, _) => state);

    // Daily rate WITH user id
    builder
      .addCase(getDailyRateByUserId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getDailyRateByUserId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
        state.summaries = payload.summaries;
      })
      .addCase(getDailyRateByUserId.rejected, (state, _) => state);
  },
});

export const dailyRateReducer = dailyRateSlice.reducer;

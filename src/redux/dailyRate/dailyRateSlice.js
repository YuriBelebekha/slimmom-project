import { createSlice } from '@reduxjs/toolkit';
import { dailyRate } from './dailyRateOperations';

const dailyRateInitialState = {
  dailyRate: null,
  notAllowedProducts: [],
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: dailyRateInitialState,

  extraReducers: builder => {
    builder
      .addCase(dailyRate.pending, (state, _) => state)
      .addCase(dailyRate.fulfilled, (state, { payload }) => {
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(dailyRate.rejected, (state, _) => state);
  },
});

export const dailyRateReducer = dailyRateSlice.reducer;

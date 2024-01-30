import { createSlice } from '@reduxjs/toolkit';
import {
  dayData,
  deleteEatenProductForDate,
  getInfoForDay,
} from './dayOperations';

const dayInitialState = {
  dayAllData: null,
  date: null,
};

export const daySlice = createSlice({
  name: 'day',
  initialState: dayInitialState,

  extraReducers: builder => {
    builder
      // addProduct
      .addCase(dayData.pending, (state, _action) => state)
      .addCase(dayData.fulfilled, (state, { payload }) => {
        state.dayAllData = payload;
      })
      .addCase(dayData.rejected, (state, _action) => state)

      // deleteProduct
      .addCase(deleteEatenProductForDate.pending, (state, _action) => state)
      .addCase(deleteEatenProductForDate.fulfilled, (state, { payload }) => {})
      .addCase(deleteEatenProductForDate.rejected, (state, _action) => state)

      // getInfoForDay
      .addCase(getInfoForDay.pending, (state, _action) => state)
      .addCase(getInfoForDay.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.date = payload.date; // ????????????????????????????
      })
      .addCase(getInfoForDay.rejected, (state, _action) => state);
  },
});

export const dayReducer = daySlice.reducer;

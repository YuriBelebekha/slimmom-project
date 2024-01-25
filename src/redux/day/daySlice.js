import { createSlice } from '@reduxjs/toolkit';
import { addProductForDay } from './dayOperations';

const userInfoInitialState = {
  date: null,
  productId: null,
  weight: null,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: userInfoInitialState,

  extraReducers: builder => {
    builder
      .addCase(addProductForDay.pending, (state, _) => state)
      .addCase(addProductForDay.fulfilled, (state, { payload }) => {})
      .addCase(addProductForDay.rejected, (state, _) => state);
  },
});

export const userInfoReducer = userInfoSlice.reducer;

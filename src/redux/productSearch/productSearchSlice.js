import { createSlice } from '@reduxjs/toolkit';
import { getProductsFromList } from './productSearchOperations';

const productsListInitialState = {
  foundProductsList: [],
};

export const productSearchSlice = createSlice({
  name: 'getProducts',
  initialState: productsListInitialState,

  extraReducers: builder => {
    builder
      .addCase(getProductsFromList.pending, (state, _) => state)
      .addCase(getProductsFromList.fulfilled, (state, { payload }) => {
        state.foundProductsList = payload;
      })
      .addCase(getProductsFromList.rejected, (state, _) => state);
  },
});

export const productSearchReducer = productSearchSlice.reducer;

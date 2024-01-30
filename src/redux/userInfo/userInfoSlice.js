import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from './userInfoOperations';

const userInfoInitialState = {
  userData: null,
  days: [],
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: userInfoInitialState,

  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, (state, _) => state)
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.userData = payload.userData;
        state.days = payload.days;
      })
      .addCase(getUserInfo.rejected, (state, _) => state);
  },
});

export const userInfoReducer = userInfoSlice.reducer;

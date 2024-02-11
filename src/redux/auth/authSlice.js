import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  // newAccessToken: null,
  // newRefreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,

  extraReducers: builder => {
    builder
      // register
      .addCase(register.pending, (state, _) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;

        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
      })
      .addCase(register.rejected, (state, _) => state)

      // login
      .addCase(login.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.user = payload.user;
        state.isLoggedIn = true;

        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
      })

      // logout
      .addCase(logout.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;

        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
      })

      // refreshUser
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isRefreshing = false;

        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
      });
  },
});

export const authReducer = authSlice.reducer;

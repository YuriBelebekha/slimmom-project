import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { dailyRateReducer } from './dailyRate/dailyRateSlice';
import { productSearchReducer } from './productSearch/productSearchSlice';
import { dayReducer } from './day/daySlice';
import { userInfoReducer } from './userInfo/userInfoSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: [
    'accessToken',
    'refreshToken',
    'sid',
    // 'isLoggedIn',
    'isRefreshing',
    'user',
  ],
};

const dailyRatePersistConfig = {
  key: 'dailyRate',
  storage,
  whitelist: ['dailyRate', 'notAllowedProducts'],
};

const userInfoPersistConfig = {
  key: 'userInfo',
  storage,
  whitelist: ['accessToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    dailyRate: persistReducer(dailyRatePersistConfig, dailyRateReducer),
    products: productSearchReducer,
    day: dayReducer,
    userInfo: persistReducer(userInfoPersistConfig, userInfoReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

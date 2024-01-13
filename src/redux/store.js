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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const dailyRatePersistConfig = {
  key: 'dailyRate',
  storage,
  whitelist: ['dailyRate', 'notAllowedProducts'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    dailyRate: persistReducer(dailyRatePersistConfig, dailyRateReducer),
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

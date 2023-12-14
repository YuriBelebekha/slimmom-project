import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
// axios.defaults.baseURL = `${process.env.BASE_API_URL}`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// POST - '/auth/register' - User registration
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.warning('This user is already registered', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

// POST - '/auth/login' - User authentication
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST - '/auth/logout' - Logout user
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST - '/auth/refresh' - Get new pair of tokens
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.post('/auth/refresh');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

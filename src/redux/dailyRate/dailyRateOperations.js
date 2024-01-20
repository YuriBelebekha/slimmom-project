import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// POST - '/daily-rate' - Get daily rate information based on your characteristics
export const getDailyRate = createAsyncThunk(
  'dailyRate/fetchData',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/daily-rate', userData);
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

// POST - '/daily-rate/{userId}' - Post your characteristics to the website and get daily rate information
export const getDailyRateByUserId = createAsyncThunk(
  'dailyRate/fetchDataByUserId',
  async (userData, { getState, rejectWithValue }) => {
    const userId = getState().auth.user.id;

    try {
      const { data } = await axios.post(`/daily-rate/${userId}`, userData);
      // console.log(data); // delete
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

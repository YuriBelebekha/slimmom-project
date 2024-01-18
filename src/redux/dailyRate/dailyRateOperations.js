import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// import { useAuth } from 'hooks';

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
  async (userData, { rejectWithValue }) => {
    // const { user } = useAuth();
    // console.log(user);
    console.log(userData);

    try {
      const { data } = await axios.post(`/daily-rate/`, userData);
      console.log(data);
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

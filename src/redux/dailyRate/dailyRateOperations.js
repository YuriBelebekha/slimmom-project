import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// POST - '/daily-rate' - Get daily rate information based on your characteristics
export const getDailyRate = createAsyncThunk(
  '/daily-rate',
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

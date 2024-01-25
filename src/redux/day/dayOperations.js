import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// POST - '/day' - Post an eaten product
export const addProductForDay = createAsyncThunk(
  'dayData/fetchDayData',
  async (productData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day', productData);
      // console.log(data);
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

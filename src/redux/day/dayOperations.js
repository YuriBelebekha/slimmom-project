import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// POST - '/day' - Post an eaten product
export const dayData = createAsyncThunk(
  'product/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day', productData);
      console.log(data);
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

// DELETE - '/day' - Delete eaten product
export const deleteEatenProductForDate = createAsyncThunk(
  'product/deleteEatenProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete('/day', productId);
      console.log(data);
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

// POST - '/day/info' - Get info for day
export const getInfoForDay = createAsyncThunk(
  'product/getInfoForDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day/info', date);
      console.log(data);
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

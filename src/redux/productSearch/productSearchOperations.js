import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_API_URL}`;

// GET - '/product' - Search and get a list of products by query
export const getProductsFromList = createAsyncThunk(
  'product',
  async (search, { rejectWithValue }) => {
    // console.log(search);
    if (!search) return [];

    try {
      const { data } = await axios.get('/product', { params: { search } });
      // console.log(data);
      return data;
    } catch (error) {
      toast.warning('Product not found', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

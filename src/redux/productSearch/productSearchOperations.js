import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import { ToastOptions } from 'services/toast-options';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_API_URL}`;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// GET - '/product' - Select and get a list of products by query
export const selectProduct = createAsyncThunk(
  'product',
  async (search, { rejectWithValue }) => {
    console.log(search);
    // if (!search) return [];
    // try {
    //   const { data } = await axios.get('/product', { params: { search } });
    //   token.set(data.token);
    //   return data;
    // } catch (error) {
    //   toast.warning('Item not found', ToastOptions);
    //   return rejectWithValue(error.message);
    // }
  }
);

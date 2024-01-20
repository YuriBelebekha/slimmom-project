import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// GET - '/user' - Get user info
export const getUserInfo = createAsyncThunk(
  'userInfo/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user');
      // console.log(data);
      // console.log(getState());
      return data;
    } catch (error) {
      toast.warning('Something went wrong', ToastOptions);
      return rejectWithValue(error.message);
    }
  }
);

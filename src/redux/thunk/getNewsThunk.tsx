import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '../constants';
import { getNewsService } from '../services/getNewsService';
import { GetNewsParams } from '../../types';

export const getNewsThunk = createAsyncThunk<any, GetNewsParams>(
  ASYNC_ROUTES.GET_NEWS,
  async (payload, thunkApi) => {
    try {
      const response = await getNewsService(payload);
      console.log('response', response);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || error.message);
    }
  },
);

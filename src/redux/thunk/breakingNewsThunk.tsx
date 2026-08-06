import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '../constants';
import { GetNewsParams } from '../../types';
import { breakingNewsService } from '../services/breakingNewsService';

export const breadkingNewsThunk = createAsyncThunk<any, GetNewsParams>(
  ASYNC_ROUTES.BREAKING_NEWS,
  async (payload, thunkApi) => {
    try {
      const response = await breakingNewsService(payload);
      console.log('response', response);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data || error.message);
    }
  },
);

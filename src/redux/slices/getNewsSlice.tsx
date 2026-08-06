import { createSlice } from '@reduxjs/toolkit';
import { getNewsThunk } from '../thunk/getNewsThunk';

const initialState = {
  news: [],
  totalResults: 0,
  loading: false,
  error: null,
} as any;

export const GetNewsSlice = createSlice({
  name: 'GetNews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewsThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewsThunk.fulfilled, (state, action) => {
        state.loading = false;

        if (action.meta.arg.page === 1) {
          state.news = action.payload.articles;
        } else {
          const result = [...state.news];

          for (const item of action.payload.articles) {
            const exist = result.find((news: any) => news.url === item.url);

            if (!exist) {
              result.push(item);
            }
          }
          state.news = result;
        }
        state.totalResults = action.payload.totalResults;
      })
      .addCase(getNewsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default GetNewsSlice.reducer;

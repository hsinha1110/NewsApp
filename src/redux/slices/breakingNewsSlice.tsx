import { createSlice } from '@reduxjs/toolkit';
import { breadkingNewsThunk } from '../thunk/breakingNewsThunk';

interface BreakingNewsState {
  breakingNews: any[];
  totalResults: number;
  loading: boolean;
  error: string | null;
}

const initialState: BreakingNewsState = {
  breakingNews: [],
  totalResults: 0,
  loading: false,
  error: null,
};

const BreakingNewsSlice = createSlice({
  name: 'BreakingNews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(breadkingNewsThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(breadkingNewsThunk.fulfilled, (state, action) => {
        state.loading = false;

        const { page } = action.meta.arg;
        const { articles = [], totalResults = 0 } = action.payload;

        if (page === 1) {
          state.breakingNews = articles;
        } else {
          const result = [...state.breakingNews];

          articles.forEach((item: any) => {
            const exist = result.some(news => news.url === item.url);

            if (!exist) {
              result.push(item);
            }
          });

          state.breakingNews = result;
        }

        state.totalResults = totalResults;
      })

      .addCase(breadkingNewsThunk.rejected, (state, action) => {
        state.loading = false;

        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : (action.payload as any)?.message ??
              action.error.message ??
              'Something went wrong';
      });
  },
});

export default BreakingNewsSlice.reducer;

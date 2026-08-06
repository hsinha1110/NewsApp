import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../../types';

const initialState: FilterState = {
  search: '',
  category: 'All',
  country: 'India',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<FilterState>) {
      return action.payload;
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { FavouriteState } from '../../types';

const initialState: FavouriteState = {
  favourites: [],
  loading: false,
  error: null,
} as any;

const favouriteSlice = createSlice({
  name: 'Favourites',
  initialState,
  reducers: {
    toggleFavourites: (state, action) => {
      const isFavourite = state.favourites.find(
        (item: any) => item.url === action.payload.url,
      );

      if (isFavourite) {
        state.favourites = state.favourites.filter(
          (item: any) => item.url !== action.payload.url,
        );
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

export const { toggleFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;

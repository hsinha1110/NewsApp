import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import getNewsReducer from '../slices/getNewsSlice';
import favouriteReducer from '../slices/favouriteSlice';
import breakingNewsReducer from '../slices/breakingNewsSlice';
import themeReducer from '../slices/themeSlice';
import filterReducer from '../slices/filterSlice';
const rootReducer = combineReducers({
  getNews: getNewsReducer,
  favourite: favouriteReducer,
  breakingNews: breakingNewsReducer,
  theme: themeReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

  whitelist: ['favourite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

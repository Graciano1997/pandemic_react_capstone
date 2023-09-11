import { configureStore } from '@reduxjs/toolkit';
import continentReducer from './continent/continentSlice';

const store = configureStore({
  reducer: {
    continent: continentReducer,
  },
});

export default store;

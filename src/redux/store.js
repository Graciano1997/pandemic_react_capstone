import { configureStore } from '@reduxjs/toolkit';
import continentReducer from './continent/continentSlice';
import countriesReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    continents: continentReducer,
    countries: countriesReducer,
  },
});

export default store;

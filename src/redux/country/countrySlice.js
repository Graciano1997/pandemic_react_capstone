import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getCountriesCases = createAsyncThunk('countries/getCountriesCases', async (countriesUrl) => {
  const result = await axios.get(countriesUrl);
  return result.data;
});

const initialState = {
  countries: [],
  isLoading: false,
  hasError: false,
};

export const countrySlice = createSlice({
  initialState,
  name: 'countries',
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.countries = action.payload.map((country) => (
          {
            country: country.country,
            flag: country.countryInfo.flag,
            cases: country.cases,
            todayCases: country.todayCases,
            todayRecovered: country.todayRecovered,
            active: country.active,
            critical: country.critical,
          }
        ));
      })
      .addCase(getCountriesCases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountriesCases.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export { getCountriesCases };
export const { listCountries } = countrySlice.actions;
export default countrySlice.reducer;

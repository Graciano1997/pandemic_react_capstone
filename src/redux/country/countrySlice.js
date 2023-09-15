import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getCountriesCases = createAsyncThunk('countries/getCountriesCases', async (countriesUrl) => {
  const result = await axios.get(countriesUrl);
  return result.data;
});

export const initialState = {
  countries: [],
  isLoading: false,
  hasError: false,
};

export const countrySlice = createSlice({
  initialState,
  name: 'countries',
  reducers: {
    resetCountries: (state) => {
      state.countries = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        const countriesNew = action.payload;
        if (countriesNew.length > 1) {
          state.countries = countriesNew.map((country) => (
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
        } else {
          state.countries[0] = {
            country: countriesNew.country,
            flag: countriesNew.countryInfo.flag,
            cases: countriesNew.cases,
            todayCases: countriesNew.todayCases,
            todayRecovered: countriesNew.todayRecovered,
            active: countriesNew.active,
            critical: countriesNew.critical,
          };
        }
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
export const { resetCountries } = countrySlice.actions;
export default countrySlice.reducer;

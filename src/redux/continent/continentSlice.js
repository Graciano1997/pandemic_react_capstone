import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const continentUrl = 'https://disease.sh/v3/covid-19/continents?yesterday=yesterday';

const getContinentCases = createAsyncThunk('continents', async () => {
  const result = await axios.get(continentUrl);
  return result.data;
});

const initialState = {
  continentArray: [],
  isLoading: false,
  hasError: false,
};

export const continentSlice = createSlice({
  initialState,
  name: 'continents',
  reducers: {
    listCountries: () => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContinentCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        // state.continentArray=action.payload;
        console.log(action.payload);
      })
      .addCase(getContinentCases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContinentCases.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export { getContinentCases };
export const { listCountries } = continentSlice.actions;
export default continentSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const continentUrl = 'https://corona.lmao.ninja/v2/continents';
const mapContinent = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/968afb90-ac92-44de-a6d9-bbd220b7fa64/dbjftku-ea7e50b6-880b-4384-bac8-f2887927100d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2OGFmYjkwLWFjOTItNDRkZS1hNmQ5LWJiZDIyMGI3ZmE2NFwvZGJqZnRrdS1lYTdlNTBiNi04ODBiLTQzODQtYmFjOC1mMjg4NzkyNzEwMGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hAbGE-0_k5QYHIfGcG9IyNbYcXd5gx1uXGnj-FFIJHU',
  'https://www.wecinternational.org/admin/resources/asia-home.png',
  'https://www.pngkit.com/png/full/390-3903931_created-with-raphal-europe-map-white-png.png',
  'https://www.orchidproject.org/wp-content/uploads/2019/03/saoutl.png',
  'https://www.pngkit.com/png/full/76-765568_bp-oil-spill-in-great-australian-bight-would.png',
  'https://www.pngplay.com/wp-content/uploads/6/Africa-White-Map-Transparent-Background.png',
];

const getContinentCases = createAsyncThunk('continents/getContinentCases', async () => {
  const result = await axios.get(continentUrl);
  return result.data;
});

const initialState = {
  continents: [],
  isLoading: false,
  hasError: false,
};

export const continentSlice = createSlice({
  initialState,
  name: 'continents',
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContinentCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.continents = action.payload.map((continent, index) => (
          {
            continent: continent.continent,
            population: continent.population,
            cases: continent.cases,
            active: continent.active,
            todayCases: continent.todayCases,
            recovered: continent.recovered,
            todayRecovered: continent.todayRecovered,
            countries: continent.countries,
            map: mapContinent[index],
          }
        ));
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
export { initialState };
export const { listCountries } = continentSlice.actions;
export default continentSlice.reducer;

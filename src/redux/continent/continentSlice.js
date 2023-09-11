import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getContinentCases = createAsyncThunk('continents', async () => {
  const result = await axios.get();
  return result.data;
})

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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContinentCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        // state.continentArray=action.payload;
        console.log(action.payload);
      })
  }
});

export { getContinentCases };
export const { listCountries } = continentSlice.actions;
export default continentSlice.reducer;

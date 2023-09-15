import countriesReducer, { getCountriesCases, initialState, resetCountries } from '../redux/country/countrySlice';
jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Handle the Country Slice', () => {

  it('should handle getCountries.Rejected', () => {
    const action = {
      type: getCountriesCases.rejected.type,
      payload: [],
    };
    const newState = countriesReducer(initialState, action);
    expect(newState.countries.length).toEqual(0);
    expect(newState.isLoading).not.toBe(true);
    expect(newState.hasError).not.toBe(false);
  });

  it('should handle getCountries.Pending', () => {
    const action = {
      type: getCountriesCases.pending.type,
      payload: [],
    };
    const newState = countriesReducer(initialState, action);
    expect(newState.countries.length).toEqual(0);
    expect(newState.isLoading).not.toBe(false);
    expect(newState.hasError).toBe(false);
  });

  it('should Reset the country List', () => {
    const action = {
      type: resetCountries.type,
      payload: [],
    };
    const newState = countriesReducer(initialState, action);
    expect(newState.countries.length).toEqual(0);
  });
});

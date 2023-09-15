import continentsReducer, { getContinentCases, initialState } from '../redux/continent/continentSlice';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('countriesSlice', () => {
  it('should handle getContinent.fulfilled', () => {
    const action = {
      type: getContinentCases.fulfilled.type,
      payload: [{
        continent: 'Africa',
        population: 2000,
        cases: 2000,
        active: 4000,
        todayCases: 2000,
        recovered: 3000,
        todayRecovered: 2000,
        countries: ['Angola', 'Argelia'],
        map: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/968afb90-ac92-44de-a6d9-bbd220b7fa64/dbjftku-ea7e50b6-880b-4384-bac8-f2887927100d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2OGFmYjkwLWFjOTItNDRkZS1hNmQ5LWJiZDIyMGI3ZmE2NFwvZGJqZnRrdS1lYTdlNTBiNi04ODBiLTQzODQtYmFjOC1mMjg4NzkyNzEwMGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hAbGE-0_k5QYHIfGcG9IyNbYcXd5gx1uXGnj-FFIJHU',
      }
      ],
    };

    const newState = continentsReducer(initialState, action);
    expect(newState.continents).toEqual(action.payload);
  });

  it('should handle getContinent.Rejected', () => {
    const action = {
      type: getContinentCases.rejected.type,
      payload: [],
    };
    const newState = continentsReducer(initialState, action);
    expect(newState.continents.length).toEqual(0);
    expect(newState.isLoading).not.toBe(true);
    expect(newState.hasError).not.toBe(false);
  });

  it('should handle getContinent.Pending', () => {
    const action = {
      type: getContinentCases.pending.type,
      payload: [],
    };
    const newState = continentsReducer(initialState, action);
    expect(newState.continents.length).toEqual(0);
    expect(newState.isLoading).not.toBe(false);
    expect(newState.hasError).toBe(false);
  });

  it('the true case getContinent.fulfilled', () => {
    const action = {
      type: getContinentCases.fulfilled.type,
      payload: [{
        continent: 'Africa',
        population: 2000,
        cases: 2000,
        active: 4000,
        todayCases: 2000,
        recovered: 3000,
        todayRecovered: 2000,
        countries: ['Angola', 'Argelia'],
        map: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/968afb90-ac92-44de-a6d9-bbd220b7fa64/dbjftku-ea7e50b6-880b-4384-bac8-f2887927100d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2OGFmYjkwLWFjOTItNDRkZS1hNmQ5LWJiZDIyMGI3ZmE2NFwvZGJqZnRrdS1lYTdlNTBiNi04ODBiLTQzODQtYmFjOC1mMjg4NzkyNzEwMGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hAbGE-0_k5QYHIfGcG9IyNbYcXd5gx1uXGnj-FFIJHU',
      }
      ],
    };

    const newState = continentsReducer(initialState, action);
    expect(newState.isLoading).toBe(false);
    expect(newState.hasError).toBe(false);
  });
});

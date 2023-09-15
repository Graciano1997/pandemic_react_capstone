import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Countries from '../components/Countries';
import Country from '../components/Country';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const initialState = {
  countries: [{
    country: 'Angola',
    flag: 'flag',
    active: 35,
    todayCases: 0,
    todayRecovered: 0
  }
  ],
  isLoading: false,
  hasError: false,
};

const mockStore = configureMockStore([]);

const store = mockStore(initialState);

const CountriesItems = () => {
  <Provider store={store}>
    <BrowserRouter>
      <Countries />
    </BrowserRouter>
  </Provider>;
};

const styleTheme = { background: '#367aca' };
const countryOb = store.getState();
const countriesArray = countryOb.countries;

const CountriesFunc = () => {
  <Provider store={store}>
    <BrowserRouter>
      {
        countriesArray.map((country, index) => (
          <Country
            key={{ index }}
            country={country.country}
            flag={country.flag}
            active={country.active}
            todayCases={country.todayCases}
            todayRecovered={country.todayRecovered}
            styleTheme={index % 2 === 1 ? styleTheme : {}}
          />
        ))
      }
    </BrowserRouter>
  </Provider>;
};

describe('Testing the Countries Rendering', () => {
  test('Should Match the Country SnapShot ', async () => {
    const element = render(<CountriesFunc />);
    expect(element).toMatchSnapshot();
  });

  test('Should Match the Country SnapShot ', async () => {
    const element = render(<CountriesItems />);
    expect(element).toMatchSnapshot();
  });

  test('Should Match the Country SnapShot ', async () => {
    const information = store.getState();
    const countryInfo = information.countries[0]
    render(<Provider store={store}>
      <Country
            country={countryInfo.country}
            flag={countryInfo.flag}
            active={countryInfo.active}
            todayCases={countryInfo.todayCases}
            todayRecovered={countryInfo.todayRecovered}
            styleTheme={styleTheme}
          />
    </Provider>);
    const word = await screen.findByText(/Angola/i);
    expect(word).toBeInTheDocument();
  });


});

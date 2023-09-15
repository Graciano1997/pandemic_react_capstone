import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Continents from '../components/Continents';
import Continent from '../components/Continent';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const styleTheme = '#00000038';
const standard = 'transparent';
const standardContinents = ['Africa', 'Asia', 'Europe'];

const initialState = {
  continents: [{
    continent: 'Africa',
    population: 2000,
    cases: 2000,
    active: 4000,
    todayCases: 2000,
    recovered: 3000,
    todayRecovered: 2000,
    countries: ['Angola', 'Argelia'],
    map: 'https://www.pngplay.com/wp-content/uploads/6/Africa-White-Map-Transparent-Background.png',
  }],
  isLoading: false,
  hasError: false,
};

const mockStore = configureMockStore([]);

const store = mockStore(initialState);

const ContinentItems = () => {
  <Provider store={store}>
    <BrowserRouter>
      <Continents />
    </BrowserRouter>
  </Provider>;
};

const information = store.getState();

describe('Testing the Continents Rendering', () => {
  test('Should render the Africa Continent ', async () => {
    const element = render(<ContinentItems />);
    expect(element).toMatchSnapshot();
  });

  test('Should Contain the Word Africa', async () => {
    const continent = information.continents[0];
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Continent
            continent={continent.continent}
            population={continent.population}
            cases={continent.cases}
            active={continent.active}
            todayCases={continent.todayCases}
            recovered={continent.recovered}
            todayRecovered={continent.todayRecovered}
            map={continent.map}
            countries={continent.countries}
            theme={standardContinents.includes(continent.continent) ? styleTheme : standard}
          />
        </BrowserRouter>
      </Provider>,
    );
    const word = await screen.findByText(/Africa/i);
    expect(word).toBeInTheDocument();
  });
});

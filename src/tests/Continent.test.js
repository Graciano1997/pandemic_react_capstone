import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Continent from '../components/Continent';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing the Continents Rendering', () => {
  test('render the Africa Continents ', () => {
    const styleTheme = '#00000038';
    const standard = 'transparent';
    const standardContinents = ['Africa', 'Asia', 'Europe'];

    const continentsRendered = render(
      <Provider store={store}>
        <BrowserRouter>
          <Continent
            key={1}
            continent={'Africa'}
            population={5000000000000}
            cases={0}
            active={2000}
            todayCases={0}
            recovered={0}
            todayRecovered={20}
            map={'https://www.pngplay.com/wp-content/uploads/6/Africa-White-Map-Transparent-Background.png'}
            countries={['Angola', 'Cabo Verde']}
            theme={standardContinents.includes('Africa') ? styleTheme : standard}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(continentsRendered).toMatchSnapshot();
  });
  test('render the Africa Continents ', () => {
    const styleTheme = '#00000038';
    const standard = 'transparent';
    const standardContinents = ['Africa', 'Asia', 'Europe'];

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Continent
            key={1}
            continent={'Africa'}
            population={5000000000000}
            cases={0}
            active={2000}
            todayCases={0}
            recovered={0}
            todayRecovered={20}
            map={'https://www.pngplay.com/wp-content/uploads/6/Africa-White-Map-Transparent-Background.png'}
            countries={['Angola', 'Cabo Verde']}
            theme={standardContinents.includes('Africa') ? styleTheme : standard}
          />
        </BrowserRouter>
      </Provider>,
    );
    const element = screen.getByText(/Africa/i);
    expect(element).toBeInTheDocument();
  });
});

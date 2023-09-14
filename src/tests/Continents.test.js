import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Continents from '../components/Continents';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing the Continents Rendering', () => {
  test('render the Continents Component', () => {
    const continentsRendered = render(
      <Provider store={store}>
        <BrowserRouter>
          <Continents />
        </BrowserRouter>
      </Provider>,
    );
    expect(continentsRendered).toMatchSnapshot();
  });
});

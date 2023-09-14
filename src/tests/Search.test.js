import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Search from '../components/Search';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing the Search Rendering', () => {
  test('render the Search Component', () => {
    const headerRendered = render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );
    expect(headerRendered).toMatchSnapshot();
  });
  test('Check if there is  the Button item', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});

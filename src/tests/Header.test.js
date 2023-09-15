import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Testing the Header Rendering', () => {
  test('render the Header Component', () => {
    const headerRendered = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(headerRendered).toMatchSnapshot();
  });
});

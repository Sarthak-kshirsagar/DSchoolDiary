import { render, screen } from '@testing-library/react';
import App from './App';
import Intro from './components/intro'
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders energy calculator form', () => {
  render(<App />);
  const headingElement = screen.getByText(/energy calculator form/i);
  expect(headingElement).toBeInTheDocument();
});

import React from 'react';
import {
  render,
  screen,
  test,
  expect,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('App renders ok', () => {
  render(<App />);
  const codeMessage = screen.getByText(/memory game/i);
  expect(codeMessage).toBeInTheDocument();
});

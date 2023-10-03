import React from 'react';
import {
  render,
  screen,
  test,
  expect,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Easy from './Easy';

test('Easy renders ok', () => {
  render(<Easy />);
  const codeMessage = screen.getByText(/card/i);
  expect(codeMessage).toBeInTheDocument();
});

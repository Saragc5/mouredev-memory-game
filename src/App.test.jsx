import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('App renders ok', () => {
  render(<App />);
  const appText = screen.getByRole("app");  
  expect(appText).toBeInTheDocument();
 
});
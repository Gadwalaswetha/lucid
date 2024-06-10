import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders navbar links', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
  expect(screen.getByText(/sign up/i)).toBeInTheDocument();
});

test('renders home screen by default', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText(/blogs/i)).toBeInTheDocument();
});

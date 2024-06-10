import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginScreen from './LoginScreen';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

test('renders login form', () => {
  render(
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );

  expect(screen.getByText(/login/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});

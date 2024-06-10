import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomeScreen from './HomeScreen';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

test('renders blog previews', () => {
  render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
  expect(screen.getByText(/blogs/i)).toBeInTheDocument();
});

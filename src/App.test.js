import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app-component')).toBeTruthy();
});
it("App component exist",()=>{
  expect(<App/>).toBeTruthy();
});

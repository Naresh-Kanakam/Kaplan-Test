import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the component', () => {
  const RenderedFile = render(<App />);
  expect(RenderedFile).not.toBe(null);
});

test('renders edt text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Erat Libero');
  expect(getByText('Erat Libero')).toBeInTheDocument()
});

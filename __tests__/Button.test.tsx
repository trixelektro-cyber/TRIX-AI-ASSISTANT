import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../src/components/Button';

test('Button renders with title', () => {
  const { getByText } = render(<Button title="Teszt" onPress={() => {}} />);
  expect(getByText('Teszt')).toBeTruthy();
});

// src/components/FormControl.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormControl from './FormControl';

test('FormControl renders correctly', () => {
  const { getByLabelText, getByText } = render(<FormControl label="Test Label" validation={() => ''} onChange={() => {}} />);
  const labelElement = getByLabelText('Test Label');
  const inputElement = getByLabelText('Test Label');
  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('FormControl displays error message on validation failure', () => {
  const { getByLabelText, getByText } = render(
    <FormControl label="Test Label" validation={(value) => (value ? '' : 'Error Message')} onChange={() => {}} />
  );
  const inputElement = getByLabelText('Test Label');
  fireEvent.change(inputElement, { target: { value: '' } });
  const errorMessage = getByText('Error Message');
  expect(errorMessage).toBeInTheDocument();
});

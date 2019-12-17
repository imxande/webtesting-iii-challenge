// Test away!
import React from 'react';
import Controls from './Controls';
import {render, fireEvent } from '@testing-library/react';


test('close gate button change to open', () => {
    const constProps = {closed: false, locked: false}
    const myVar =  jest.fn(() => {
        constProps.closed = !constProps.closed;
      })
     
 
  const { getByText, rerender } = render(<Controls {...constProps} toggleClosed = {myVar} />);
  const button = getByText(/close gate/i);
  fireEvent.click(button);
  rerender(<Controls {...constProps} toggleClosed = {myVar}/>)
  expect(button.innerHTML).toBe('Open Gate')
 
});

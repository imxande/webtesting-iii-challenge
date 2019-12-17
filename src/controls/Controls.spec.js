// Test away!
import React from 'react';
import Controls from './Controls';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


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

test('lock gate button text changes to unlock gate', () =>{
  const constProps = {closed: true, locked: false}
  const jestFn = jest.fn(() =>{
    constProps.locked = !constProps.locked;
  })
  const {getByText, rerender} = render(<Controls {...constProps} toggleLocked = {jestFn} />);
  const button = getByText(/lock gate/i);
  fireEvent.click(button);
  rerender(<Controls {...constProps} />)
  expect(button.innerHTML).toBe('Unlock Gate')
 
})

test('check if lock/unlock is disabled when gate is open', ()=>{
  const constProps = {closed: false, locked: false}
  const {getByText} = render(<Controls {...constProps}/>)
 expect(getByText(/lock gate/i).closest('button')).toHaveAttribute('disabled')
})

test('check if Open/closed is disbled when gate is lock', () =>{
  const constProps = {closed: true, locked: true}
  const {getByText} = render(<Controls {...constProps}/>)
 expect(getByText(/open gate/i).closest('button')).toHaveAttribute('disabled')
})

test('provide button from closed and open', () =>{
  const constProps = {closed: false, locked: false}
  const {getByText} = render(<Controls {...constProps}/>)
  getByText(/close gate/i)
})
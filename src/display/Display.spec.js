// Test away!
import React from 'react';
import Display from './Display';
import {render} from '@testing-library/react';


test('check if closed', () =>{
    const {getByTestId, rerender} = render(<Display closed/>)
    getByTestId('closed');

    rerender(<Display closed = {false} />)
    getByTestId('closed')
})

test('check if locked', () =>{
    const {getByTestId, rerender} = render(<Display locked/>)
    getByTestId('locked');

    rerender(<Display locked = {false} />)
    getByTestId('locked')
})

test('check if green red', () => {
    const className = 'led red-led';
    const locked = false;
    const display = render(<Display closed locked = {locked}
    className = {className}/>)
    expect(display.baseElement).toMatchSnapshot();
})

test('check if green green',() => {
    const className = 'led green-led';
    const locked = false;
    const closed = false;
    const display = render(<Display closed locked = {locked}
    className = {className}/>)
    expect(display.baseElement).toMatchSnapshot();
})

test('check if red red',() => {
    const className = 'led red-led';
    const locked = true;
    const closed = true;
    const display = render(<Display closed = {closed} locked = {locked}
    className = {className}/>)
    expect(display.baseElement).toMatchSnapshot();
})

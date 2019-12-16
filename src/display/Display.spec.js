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


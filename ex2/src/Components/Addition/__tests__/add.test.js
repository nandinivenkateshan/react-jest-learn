import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Add from '../index'

describe('<Addition >', () => {
  test('Add the 2 values', () => {
    render(<Add />)
    const Result = screen.getByText('Result: 0')
    const Val1 = screen.getByTestId('val1')
    const Val2 = screen.getByTestId('val2')
    const Submit = screen.getByText('Add')

    fireEvent.change(Val1, { target: { value: 1 } })
    fireEvent.change(Val2, { target: { value: 2 } })
    fireEvent.click(Submit)
    expect(Result.textContent).toEqual('Result: 3')
  })
})

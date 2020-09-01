import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '../index'

describe('<Counter />', () => {
  it('It increments and Decremets the Count Value', () => {
    render(<Counter />)
    const Count = screen.getByText('Count 0')
    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')

    fireEvent.click(incrementButton)
    expect(Count.textContent).toEqual('Count 1')

    fireEvent.click(decrementButton)
    expect(Count.textContent).toEqual('Count 0')
  })
})

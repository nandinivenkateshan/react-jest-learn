import React, { useState } from 'react'

function Add () {
  const [result, setResult] = useState(0)
  const [value, setVal] = useState({ val1: '', val2: '' })
  const handleValue = e => {
    const val = e.target.value
    const name = e.target.name
    setVal({ ...value, [name]: val })
  }

  const handleResult = () => {
    const res = Number(value.val1) + Number(value.val2)
    setResult(res)
  }
  return (
    <>
      <h1>Result: {result}</h1>
      <input type='number' onChange={handleValue} name='val1' data-testid='val1' />
      <input type='numer' name='val2' onChange={handleValue} data-testid='val2' />
      <button onClick={handleResult}>Add</button>
    </>
  )
}

export default Add

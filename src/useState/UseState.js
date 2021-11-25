import React, { useState } from 'react'

const UseState = () => {
  const initialState = 0
  const [counter, setCounter] = useState(initialState)
  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleReset = () => {
    setCounter(initialState)
  }
  const handleDecrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <div className='counter'>{counter}</div>
      <button className='increment' onClick={handleIncrement}>+</button>
      <button className='reset' onClick={handleReset}>Reset</button>
      <button className='decrement' onClick={handleDecrement}>-</button>
    </div>
  )
}

export default UseState

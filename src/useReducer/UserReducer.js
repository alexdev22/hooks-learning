import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'toggleShowText':
      return { ...state, showText: !state.showText }
    default:
      return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div>
      <div className='counter'>{state.count}</div>
      <button
        className='increment'
        onClick={() => dispatch({ type: 'increment' })}
      >+
      </button>
      <button onClick={() => dispatch({ type: 'toggleShowText' })}>Toggle Text</button>
      {state.showText && <span className='text'>This is the text</span>}
    </div>
  )
}

export default UseReducer

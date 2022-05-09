import React, { useState } from 'react'

function ShortCircuit() {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  //OR operator - if first arg is true, it returns the value else if it is false, it returns 2nd arg
  // const firstValue = text || 'helloo world'
  //AND operator - if first arg is true it returns 2nd value, else it returns nothing.
  // const secondValue = text && 'helloooo world!!!'

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>Value: {secondValue}</h2> */}

      <h2>{text || 'Steve Austin'}</h2>
      {text && <h2>Helloo World</h2>}
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle
      </button>
      {isError && <h2>Error displayed..!!</h2>}

      {isError ? <p>There is an error...</p> : <h3>There is no error!!</h3>}
    </>
  )
}

export default ShortCircuit

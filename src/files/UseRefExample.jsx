import React, { useState, useRef, useEffect } from 'react'

//useRef preserves the value between the renders and does not trigger re-render
//we can target DOM nodes/elements
function UseRefExample() {
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }

  useEffect(() => {
    console.log(refContainer.current)
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div ref={divContainer}>
        <h4>Helloo world</h4>
      </div>
    </>
  )
}

export default UseRefExample

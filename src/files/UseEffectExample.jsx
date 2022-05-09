import { useState, useEffect } from 'react'

//by default, useEffect runs after re-render of page, or page refresh
//cleanup function
//second parameter - dependency array. If not called, runs on loop on every page render
//when an empty array is passed as dependency array, it only runs once on initial render
//when anything is passed in that array, it will run whenever the state changes depending on value that is passed

function UseEffectExample() {
  const [value, setValue] = useState(0)

  const [size, setSize] = useState(window.innerWidth)

  //useEffect cannot be called conditionally, as hooks dont allow it
  //conditionals can be used inside of hooks only
  useEffect(() => {
    console.log('useEffect called!')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('The second time')
  }, [])

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  //cleanup function
  useEffect(() => {
    console.log('useEffect Cleanup function')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('You are now clean!')
      window.removeEventListener('resize', checkSize)
    }
  })

  console.log('Render Component')

  return (
    <>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>

      <h2 style={{ padding: '2rem 0' }}>Window</h2>
      <h3>{size} PX</h3>
    </>
  )
}

export default UseEffectExample

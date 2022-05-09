import React, { useEffect, useState } from 'react'

function ShowHide() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show / Hide
      </button>
      {show && <Item />}
    </>
  )
}

function Item() {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size: {size} PX</h2>
    </div>
  )
}

export default ShowHide

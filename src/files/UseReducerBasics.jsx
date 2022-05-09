import React, { useReducer, useState } from 'react'

//reducer function
const reducer = (state, action) => {
  if (action.type === 'TESTING') {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'Item added',
    }
  }
  return state
}

const data = [
  { id: 1, name: 'Rohit' },
  { id: 2, name: 'Vijay' },
  { id: 3, name: 'Girish' },
  { id: 4, name: 'Aniket' },
]

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

function UseReducerBasics() {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch({ type: 'TESTING' })
    } else {
    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>ADD</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

function Modal({ modalContent }) {
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
}

export default UseReducerBasics

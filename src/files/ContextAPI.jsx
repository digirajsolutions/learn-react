import React, { useState, useContext } from 'react'

const data = [
  { id: 1, name: 'Rohit' },
  { id: 2, name: 'Vijay' },
  { id: 3, name: 'Girish' },
  { id: 4, name: 'Aniket' },
]

const PersonContext = React.createContext()

function ContextAPI() {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <>
      <PersonContext.Provider value={{ removePerson, people }}>
        <h3>ContextAPI - useContext</h3>
        <List />
      </PersonContext.Provider>
    </>
  )
}

function List() {
  const { people } = useContext(PersonContext)
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

function SinglePerson({ id, name }) {
  const { removePerson } = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>X</button>
    </div>
  )
}

export default ContextAPI

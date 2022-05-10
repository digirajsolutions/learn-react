import React, { useState } from 'react'

const data = [
  { id: 1, name: 'Rohit' },
  { id: 2, name: 'Vijay' },
  { id: 3, name: 'Girish' },
  { id: 4, name: 'Aniket' },
]

function PropDrilling() {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <>
      <section>
        <h3>Prop Drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  )
}

function List({ people, removePerson }) {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

function SinglePerson({ id, name, removePerson }) {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>X</button>
    </div>
  )
}

export default PropDrilling

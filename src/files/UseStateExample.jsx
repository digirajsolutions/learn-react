import React, { useState } from 'react'

function UseStateExample() {
  let title = 'Learning React'

  const data = [
    { id: 1, name: 'Rohit' },
    { id: 2, name: 'Vijay' },
    { id: 3, name: 'Girish' },
    { id: 4, name: 'Aniket' },
  ]

  const [text, setText] = useState(title)
  const [people, setPeople] = useState(data)
  const [human, setHuman] = useState({
    name: 'Rohit',
    age: 29,
    profile: 'Developer',
  })
  const [value, setValue] = useState(0)

  const handleClick = () => {
    if (text === 'Learning React') {
      setText('Learning React from Basics!')
    } else {
      setText('Learning React')
    }
  }

  const removeItem = (id) => {
    //filter takes id that does not match and creates a new array of newPeople
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const changeMessage = () => {
    //the spread operator copies the first two values as it is and changes only profile
    setHuman({ ...human, profile: 'Full Stack Web Developer' })
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <h3>{text}</h3>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>

      {/* using useState hook over array of objects */}
      {people.map((person) => (
        <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button onClick={() => removeItem(person.id)}>X</button>
        </div>
      ))}

      {/* setPeople here changes the state to empty array */}
      <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button>

      <div style={{ padding: '2rem 0' }}>
        <h3>{human.name}</h3>
        <h3>{human.age}</h3>
        <h3>{human.profile}</h3>
        <button className='btn' onClick={changeMessage}>
          CHANGE
        </button>
      </div>

      <div style={{ padding: '2rem 0' }}>
        <h3>Complex Counter</h3>
        <h3>{value}</h3>
        <button className='btn' onClick={complexIncrease}>
          INCREASE
        </button>
      </div>
    </>
  )
}

export default UseStateExample

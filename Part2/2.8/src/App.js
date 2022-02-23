import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      phone: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  
  
  const addContact = (event) => {
    event.preventDefault()
    
    if(persons.find(({name}) => name === newName)===undefined){
      if(persons.find(({phone}) => phone === newPhone)===undefined){
        const newObjetcPerson= {
          name: newName,
          phone: newPhone 
        }
        setPersons(persons.concat(newObjetcPerson))
          setNewName('')
          setNewPhone('')
       }else{
        window.alert('The number already exist');
        setNewName('')
      setNewPhone('')
       }
    }
      
    
      
      
      
    
   
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input
          value={newPhone}
          onChange={handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
          
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => 
        <li key={person.name}>{person.name}: {person.phone}</li>
      )}</ul>
    </div>
  )
}

export default App
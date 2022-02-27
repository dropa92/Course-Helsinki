import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ found, setFound ] = useState('')
  const [ contacts, setContacts ] = useState([])


  
  
  
  
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

  

  const handleFoundChange = (event) => {
    setFound(event.target.value)
   
    setContacts(persons.filter(persons => persons.name.toUpperCase().includes(found.toUpperCase())).map(contacts => <p>{contacts.name}</p>))
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
      <div>
          name: <input
          value={found}
          onChange={handleFoundChange}
          />
        </div>
      <h2>Add a new</h2>
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
      <ul>{contacts}</ul>
    </div>
  )
}

export default App
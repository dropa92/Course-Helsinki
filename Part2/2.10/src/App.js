import React, { useState } from 'react'

const Filter = (props) =>{

  return(
<div>
          name: <input
          value={props.value}
          onChange={props.onChange}
          />
        </div>
  )

}

const PersonForm = (props) => {

  return(
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input
          value={props.valueName}
          onChange={props.onChangePerson}
          />
        </div>
        <div>
          number: <input
          value={props.valuePhone}
          onChange={props.onChangePhone}
          />
        </div>
        <div>
          <button type="submit">add</button>
          
        </div>
      </form>
  )

}

const Persons = (props) => {
  return(
    <ul>{props.contacts}</ul>
  )
  
}

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
   console.log(event.target.value)
    if(event.target.value === ""){
      setContacts("")
    }else{
      setContacts(persons.filter(persons => persons.name.toUpperCase().includes(found.toUpperCase())).map(contacts => <p key={contacts.name}>{contacts.name}</p>))  
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
      <Filter onChange={handleFoundChange} value={found}/>
      <h2>Add a new</h2>
      <PersonForm onSubmit={addContact}
                  valueName={newName}
                  onChangePerson={handlePersonChange}
                  valuePhone={newPhone}
                  onChangePhone={handlePhoneChange}
                  />
      <h2>Numbers</h2>
      <Persons contacts={contacts}/>
    </div>
  )
}

export default App
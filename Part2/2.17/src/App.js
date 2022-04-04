import React, {useEffect, useState } from 'react'
import personService from './services/people'

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
  
  
      return(props.contacts.name)

      }
  


const App = () => {
  const [persons, setPersons] = useState([])

  
  const hook = () =>{
  personService.getAll()
  .then(response => {
    setPersons(response)
    
  })
    
}

  useEffect(hook,[])
  
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
        personService.create(newObjetcPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
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
    if(event.target.value === undefined){
      setContacts()
    }else{
      setContacts(persons.filter(persons => persons.name.toUpperCase().includes(found.toUpperCase())).map(contacts => {
        return (contacts)
      }))  
    }
    
    }

    const deleteContact = (props) => {
     
      if( window.confirm("Do you want delete this contact?")){
    personService.remove(props)
    .then(response => {
      setPersons(persons.concat(response.data))
      setContacts([])
      setFound("")
      hook()
    })
     
  }
    }


  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const List = () => {

    
    if(contacts === undefined){
      return("")
    }else{
      
      return(
      contacts.map(contact =>{
       
       return(  <li key={contact.id}><Persons contacts={contact} /><button onClick={() => deleteContact(contact.id)}>delete</button>
         </li>
       )
       } )
       )
    }
  
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
      <List/>
      
      
    </div>
  )
  }

export default App





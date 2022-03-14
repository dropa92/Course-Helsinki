import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
  const [persons, setPersons] = useState([])
  

  

  const hook = () => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
    
  }

  useEffect(hook,[])

  const nombres = persons.map(contacts =>
    <p key={contacts.id}>{contacts.name} {contacts.number}</p>
    )
  


  return (
    <div>
     {nombres}
    
    </div>
    
  )
}

export default App

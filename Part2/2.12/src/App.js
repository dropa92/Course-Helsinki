import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = (props) =>{

  return(
<div>
          find countries: <input
          value={props.value}
          onChange={props.onChange}
          />
        </div>
  )

}

const Countries = (props) => {

  return(
    <div>{props.found}</div>
    
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [found, setFound] = useState('')
  

 const handleFoundChange = (event) =>{

  if(event.target.value === ""){
    
    setFound("")
  
  }else{

    let variable = countries.filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase()))
                      
    if(variable.length >10){
                        
      setFound("Too many countries. Please, be more specific")
                      
      }else{

        if(variable.length > 1){

          setFound(variable.map(country => <p key={country.alpha3Code}>{country.name}</p>))
        
        }else{
          let languages = variable[0].languages.map(language => <li key={language.iso639_1}>{language.name}</li>)

          setFound(variable.map(country => <div key={country.alpha3Code}>
                                                                        <h2>{country.name}</h2> 
                                                                        <p>Capital: {country.capital}</p> 
                                                                        <p>Population: {country.population}</p>
                                                                        <h3>LANGUAGES:</h3>
                                                                        <p>{languages}</p>
                                                                        <img src={country.flag} width="225" height="150"></img>
                                                                        </div>))

        }
      }
  } 
 } 

 

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      
      setCountries(response.data)
    
    }) 
  }

  useEffect(hook,[])

  


  return (
    <div>
    <Filter onChange={handleFoundChange}/>
   <Countries found={found}/>
    </div>
    
  )
}

export default App

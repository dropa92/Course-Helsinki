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
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  

const viewCountry = (props) => {
  
  let languages = props.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)
  axios.get('http://api.weatherstack.com/current?access_key='+api_key+'&query='+props.name)
  .then(response => {
    console.log(response.data.current.temperature)
    setFound( <div key={props.alpha3Code}>
      <h2>{props.name}</h2> 
      <p>Capital: {props.capital}</p> 
      <p>Population: {props.population}</p>
      <h3>LANGUAGES:</h3>
      <p>{languages}</p>
      <img src={props.flag} width="225" height="150"></img>
      <h3>Weather in {props.capital}</h3>
      <p><b>Temperature:</b> {response.data.current.temperature}</p>
<img src={response.data.current.weather_icons[0]} width="112" height="125"></img>
<p><b>Wind: </b>{response.data.current.wind_speed} mph direction {response.data.current.wind_dir}</p>
     
      
</div>
      
      )  
  })
  

}

 const handleFoundChange = (event) =>{

  if(event.target.value === ""){
    
    setFound("")
  
  }else{

    let variable = countries.filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase()))
                      
    if(variable.length >10){
                        
      setFound("Too many countries. Please, be more specific")
                      
      }else{

        if(variable.length > 1){

          setFound(variable.map(country => <p key={country.alpha3Code}>{country.name}<button onClick={() => viewCountry(country)}>Show</button></p>))
        
        }else{
          
          viewCountry(variable[0])

        }
      }
  } 
 } 

 const getWeather = (country) => {

  axios.get('http://api.weatherstack.com/current?access_key='+api_key+'&query='+country)
  .then(response => {
    console.log(response)
    return(
      
      <p><b>Temperature:</b> response.data.current.Temperature</p>
                                                                
    )
  })
  

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


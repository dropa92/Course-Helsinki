import React, { useState } from 'react'

  
const Statistics = (props) => {
 
  if(props.good===0 && props.neutral===0 && props.bad===0){
    return(
      <p>No feedback given</p>
    )
  }else{
  
    return(
  
      <div>
        <Statistic text="good" value ={props.good} />
        <Statistic text="Neutral" value={props.neutral}/>
        <Statistic text="Bad" value={props.bad}/>
        <Statistic text="All" value={props.good+props.neutral+props.bad}/>
        <Statistic text="Average" value={props.average}/>
        <Statistic text="Positive" value={props.positive}/>
        
      </div>
    
  
    )
  } 
}

const Statistic = (props) => {
 
  if(props.text !== "Positive"){
  return(
  
        <div>
        <p>{props.text}: {props.value}</p>
        </div>
          
  )
  }else{
    return(
  
      <div>
      <p>{props.text}: {props.value}%</p>
      </div>
        
)
  }
}

const Button = (props) => {
  return(
  <button onClick={props.click}>{props.text}</button>
      
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good:0,
    neutral:0,
    bad:0
  }
  )
  

  const handleGoodClick = () => {
    const newClicks = { 
      ...clicks, 
      good: clicks.good + 1 
    }
    setClicks(newClicks)
  }
  
  const handleNeutralClick = () => {
    const newClicks = { 
      ...clicks, 
      neutral: clicks.neutral + 1 
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = { 
      ...clicks, 
      bad: clicks.bad + 1 
    }
    setClicks(newClicks)
  }

  const average = () => {
    
      let average = (clicks.good-clicks.bad) / (clicks.good + clicks.neutral + clicks.bad)

      return average
      
  }
  

  const positivePercentage = () => {
    
    
    
    return(
      clicks.good / (clicks.good + clicks.neutral + clicks.bad) * 100
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button  click={handleGoodClick} text="Good"/>
              <Button click={handleNeutralClick} text="Neutral"/>
              <Button click={handleBadClick} text="Bad"/>
      <h1>Statistics</h1>
      <Statistics good={clicks.good}
                  neutral={clicks.neutral}
                  bad={clicks.bad}
                  average={average()}
                  positive={positivePercentage()}/>
                 
    </div>
  )
}

export default App
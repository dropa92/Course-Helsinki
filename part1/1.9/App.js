import React, { useState } from 'react'

const Statistics = (props) => {
 
 if(props.good==0 && props.neutral==0 && props.bad==0){
   return(
     <p>No feedback given</p>
   )
 }
  return(
  <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive}%</p>
  </div>
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
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={clicks.good}
                 neutral={clicks.neutral}
                 bad={clicks.bad}
                 all={clicks.good+clicks.neutral+clicks.bad}
                 average={average()}
                 positive={positivePercentage()}/>
    </div>
  )
}

export default App
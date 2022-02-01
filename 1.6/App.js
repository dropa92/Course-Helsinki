import React, { useState } from 'react'

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

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>Statistics</h1>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
    </div>
  )
}

export default App
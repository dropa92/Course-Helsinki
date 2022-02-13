import React, { useState } from 'react'

const App = () => {

  

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Brooks Law: "Adding manpower to a late software project makes it later!"',
    'The best way to get a project done faster is to start sooner',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'How does a project get to be a year late?... One day at a time.'
  ]
  

  

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0,0,0])
  const [anecdoteOfDay, setAnecdote] = useState(0)

  

  const addVote= () => {
  let copy = { ...points }
  
  copy[selected] += 1  
setPoints(copy)

if(points[anecdoteOfDay]<=points[selected]){
  setAnecdote(selected)
}
  }

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 10))
    console.log(points)
  }
 

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <h2>Has {points[selected]} points</h2>
      <button onClick={()=>addVote()}>VOTE</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <br/>
      <br/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[anecdoteOfDay]}</p>
      
      
    </div>
  )


  
}



export default App
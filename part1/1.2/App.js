import React from 'react'

const App = () => {
  const course = 'Full Stack Application Development'
  const part0 = 'Fundamentals of Web apps'
  const part1 = 'Introduction to React'
  const part2 = 'Communicating with server'
  const part3 = 'Programming a server with NodeJS and Express'
  const part4 = 'Testing Express servers, user administration'
  const part5 = 'Testing React apps'
  const part6 = 'State management with Redux'
  const part7 = 'React router, custom hooks, styling app with CSS and webpack'
  const part8 = 'GraphQL'
  const part9 = 'TypeScript'
  const part10 = 'React Native'
  const part11 = 'CI/CD'

  const exercises0 = 6
  const exercises1 = 14
  const exercises2 = 20
  const exercises3 = 22
  const exercises4 = 23
  const exercises5 = 22
  const exercises6 = 21
  const exercises7 = 21
  const exercises8 = 26
  const exercises9 = 27
  const exercises10 = 27
  const exercises11 = 22


  return (
    <div>
      <Header name={course}/>
      
      <p>
        <Content P1={part0} P2={part1} P3={part2} E1={exercises0} E2={exercises1} E3={exercises2} /> 
      </p>
      
      <p> 
        <Content P1={part3} P2={part4} P3={part5} E1={exercises3} E2={exercises4} E3={exercises5} /> 
      </p> 

      <p>
        <Content P1={part6} P2={part7} P3={part8} E1={exercises6} E2={exercises7} E3={exercises8} /> 
      </p>
      
      <p>
        <Content P1={part9} P2={part10} P3={part11} E1={exercises9} E2={exercises10} E3={exercises11} /> 
      </p>

      <p> <Total number={exercises0
                        +exercises1
                        +exercises2
                        +exercises3
                        +exercises4
                        +exercises5
                        +exercises6
                        +exercises7
                        +exercises8
                        +exercises9
                        +exercises10
                        +exercises11}/></p>
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>Course: {props.name}</h1>
    </div>
)
}

const Content = (props) => {
  return (
    
    <div>
      <Part number={props.P1} exercises={props.E1}/>
      <Part number={props.P2} exercises={props.E2}/>
      <Part number={props.P3} exercises={props.E3}/>
    </div>
  )
}

const Part = (props) => {
  return (
   
   <div>
      Part: {props.number}.  <br/> Exercises: {props.exercises}
    </div>
  )
}

const Total = (props) => {
  
  return (
    <div>
      Total exercises: {props.number}
    </div>
  )
}

export default App
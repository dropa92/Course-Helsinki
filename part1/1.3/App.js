import React from 'react'

const App = () => {
  const course = 'Full Stack Application Development'
  const part0 = {
    name:'Fundamentals of Web apps' ,
    exercises: 6
  }

  const part1 = {
    name:'Introduction to React' ,
    exercises: 14
  }
  
  const part2 = {
    name:'Communicating with server' ,
    exercises: 20
  }
  const part3 = {
    name:'Programming a server with NodeJS and Express' ,
    exercises: 22
  }
  const part4 = {
    name:'Testing Express servers, user administration' ,
    exercises: 23
  }
  const part5 = {
    name:'Testing React apps' ,
    exercises: 22
  }
  const part6 = {
    name:'State management with Redux' ,
    exercises: 21
  }
  const part7 = {
    name:'React router, custom hooks, styling app with CSS and webpack' ,
    exercises: 21
  }
  const part8 = {
    name:'GraphQL' ,
    exercises: 26
  }
  const part9 = {
    name:'TypeScript' ,
    exercises: 27
  }
  const part10 = {
    name:'React Native' ,
    exercises: 27
  }
  const part11 = {
    name:'CI/CD' ,
    exercises: 22
  }


  return (
    <div>
      <Header name={course}/>
      
      <p>
        <Content P1={part0.name} P2={part1.name} P3={part2.name} E1={part0.exercises} E2={part1.exercises} E3={part2.exercises} /> 
      </p>
      
      <p> 
        <Content P1={part3.name} P2={part4.name} P3={part5.name} E1={part3.exercises} E2={part4.exercises} E3={part5.exercises} /> 
      </p> 

      <p>
        <Content P1={part6.name} P2={part7.name} P3={part8.name} E1={part6.exercises} E2={part7.exercises} E3={part8.exercises} /> 
      </p>
      
      <p>
        <Content P1={part9.name} P2={part10.name} P3={part11.name} E1={part9.exercises} E2={part10.exercises} E3={part11.exercises} /> 
      </p>

      <p> <Total number={part0.exercises
                        +part1.exercises
                        +part2.exercises
                        +part3.exercises
                        +part4.exercises
                        +part5.exercises
                        +part6.exercises
                        +part7.exercises
                        +part8.exercises
                        +part9.exercises
                        +part10.exercises
                        +part11.exercises}/></p>
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
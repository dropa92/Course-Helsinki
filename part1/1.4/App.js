import React from 'react'

const App = () => {
  const course = 'Full Stack Application Development'

  const parts= [
    {
      name:'Fundamentals of Web apps' ,
    exercises: 6
    },
    {
      name:'Introduction to React' ,
    exercises: 14
    },
    {
      name:'Communicating with server' ,
    exercises: 20
    },
    {
      name:'Programming a server with NodeJS and Express' ,
    exercises: 22
    },
    {
      name:'Testing Express servers, user administration' ,
    exercises: 23
    },
    {
      name:'Testing React apps' ,
    exercises: 22
    },
    {
      name:'State management with Redux' ,
    exercises: 21
    },
    {
      name:'React router, custom hooks, styling app with CSS and webpack' ,
      exercises: 2
    },
    {
      name:'GraphQL' ,
    exercises: 26
    },
    {
      name:'TypeScript' ,
    exercises: 27
    },
    {
      name:'React Native' ,
    exercises: 27
    },
    {
      name:'CI/CD' ,
    exercises: 22
    }
  ]
 
 


  return (
    <div>
      <Header name={course}/>
      
      <p>
        <Content P1={parts}/> 
      </p>
      
      <p> <Total number={parts}/></p>
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
     <Part part={props.P1} />
      
    </div>
    
   
  

  )
}

const Part = (props) => {
  return (
   
   <div>
      Part 0: {props.part[0].name}.  <br/> Exercises: {props.part[0].exercises}
      <br/>
      <br/>
      Part 1: {props.part[1].name}.  <br/> Exercises: {props.part[1].exercises}
      <br/>
      <br/>
      Part 2: {props.part[2].name}.  <br/> Exercises: {props.part[2].exercises}
      <br/>
      <br/>
      Part 3: {props.part[3].name}.  <br/> Exercises: {props.part[3].exercises}
      <br/>
      <br/>
      Part 4: {props.part[4].name}.  <br/> Exercises: {props.part[4].exercises}
      <br/>
      <br/>
      Part 5: {props.part[5].name}.  <br/> Exercises: {props.part[5].exercises}
      <br/>
      <br/>
      Part 6: {props.part[6].name}.  <br/> Exercises: {props.part[6].exercises}
      <br/>
      <br/>
      Part 7: {props.part[7].name}.  <br/> Exercises: {props.part[7].exercises}
      <br/>
      <br/>
      Part 8: {props.part[8].name}.  <br/> Exercises: {props.part[8].exercises}
      <br/>
      <br/>
      Part 9: {props.part[9].name}.  <br/> Exercises: {props.part[9].exercises}
      <br/>
      <br/>
      Part 10: {props.part[10].name}.  <br/> Exercises: {props.part[10].exercises}
      <br/>
      <br/>
      Part 11: {props.part[11].name}.  <br/> Exercises: {props.part[11].exercises}
    </div>
  )
}

const Total = (props) => {
  
  return (
    <div>
      Total exercises: {props.number[0].exercises
                       +props.number[1].exercises
                       +props.number[2].exercises
                       +props.number[3].exercises
                       +props.number[4].exercises
                       +props.number[5].exercises
                       +props.number[6].exercises
                       +props.number[7].exercises
                       +props.number[8].exercises
                       +props.number[9].exercises
                       +props.number[10].exercises
                       +props.number[11].exercises
                       
                       }
    </div>
  )
}

export default App
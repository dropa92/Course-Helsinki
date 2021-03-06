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
        <Content number={part0} exercises={exercises0}/> 
      </p>
      <p>
      <Content number={part1} exercises={exercises1}/> 
      </p>
      <p>
      <Content number={part2} exercises={exercises2}/> 
      </p>
      <p>
      <Content number={part3} exercises={exercises3}/> 
      </p>
      <p>
      <Content number={part4} exercises={exercises4}/> 
      </p>
      <p>
      <Content number={part5} exercises={exercises5}/> 
      </p>
      <p>
      <Content number={part6} exercises={exercises6}/> 
      </p>
      <p>
      <Content number={part7} exercises={exercises7}/> 
      </p>
      <p>
      <Content number={part8} exercises={exercises8}/> 
      </p>
      <p>
      <Content number={part9} exercises={exercises9}/> 
      </p>
      <p>
      <Content number={part10} exercises={exercises10}/> 
      </p>
      <p>
      <Content number={part11} exercises={exercises11}/> 
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
      Part {props.number} {props.exercises}
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

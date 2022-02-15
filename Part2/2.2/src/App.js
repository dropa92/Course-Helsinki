
const Course = ({course}) => {
 let total = course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises

  


  return(
  <div>
    <h1>{course.name}</h1>
  <ul>
    {course.parts.map(unit => 
      <li key={unit.id}>{unit.name}: {unit.exercises}</li>)}
  </ul>
  <h4>Total exercises: {total}</h4>
  </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}


export default App
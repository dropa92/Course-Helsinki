
const Course = ({course}) => {
 let total = [course.parts[0],course.parts[1],course.parts[2]].reduce((ac,cu) => {
   console.log(ac)
   console.log(cu.exercises)
    return ac + cu.exercises
 },0)

  
/*const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
let finish=array1.reduce(reducer)
// expected output: 10
  */  

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
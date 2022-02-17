const Course = (props) => {

  const course = props.courses

  let total = (props) => {

    if(props === 1){

      return(
      [course[0].parts[0],course[0].parts[1],course[0].parts[2]].reduce((ac,cu) => {
        return ac + cu.exercises
     },0)
      )
    }else{

      return(
      [course[1].parts[0],course[1].parts[1]].reduce((ac,cu) => {
        return ac + cu.exercises
      },0)
      )
    }
  }
  
  return(
    <div>
      <ul>
        {course.map(course =>
          <li key={course.id}>
            <h1>{course.name}</h1>
          {course.parts.map(unit =>
            <ul key={unit.id}>
              {unit.name}:{unit.exercises}
              
            </ul>
            )}
            <p>Total exercises:{total(course.id)}</p>
          </li>
          
            )}
        
        
          
          <ul>
            
            
          </ul>
        
        </ul>
      
    
    
    </div>
         )
          }

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}




export default App
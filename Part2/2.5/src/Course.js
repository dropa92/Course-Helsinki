import React from 'react'
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

            export default Course
import React from 'react'
import { useParams } from 'react-router-dom'
import { students } from './Students' 
const Student = () => {
  const params=useParams()
  const studentData=students.filter(item=>item.id===Number(params.StuId))
  return (
    <div>Student
      {studentData.map((item)=>(
        <div key={item.id}>{item.id}.{item.name}</div>
      ))}
    </div>
  )
}
export default Student
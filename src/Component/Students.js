import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export const students = [
  {id:1, name :"Harshita"},
  {id:2, name :"janaki"},
  {id:3, name :"Lalsa"},
  {id:4, name :"manikumar"},
  {id:5, name :"Karthik"},
]

export default class Students extends Component {
  render() {
    return (
      <div>Students <br/>
        {students.map((item)=>(
          <div key={item.id}><Link to={`/student/${item.id}`}>{item.id}.{item.name}</Link></div>
        ))}
      </div>
    )
  }
}

import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>
      <h1>BROWSER ROUTER</h1>
      <NavLink to="/home"  className={({ isActive }) =>
    isActive ? 'green' : 'black'
  }>Home</NavLink>||
  <NavLink to="/students" className={({ isActive }) =>
    isActive ? 'green' : 'black'
  }>Students</NavLink>||
      <NavLink to="/contact" className={({ isActive }) =>
    isActive ? 'green' : 'black'
  }>Contact</NavLink>||
      <NavLink to="/team" className={({ isActive }) =>
    isActive ? 'green' : 'black'
  }>Team</NavLink>||
      <NavLink to="/support" className={({ isActive }) =>
    isActive ? 'green' : 'black'
  }>Support</NavLink>||
      <NavLink to="/career" className={({ isActive }) =>
    isActive ? 'green' : 'black'
  }>Career</NavLink>
    </div>
  )
}
// Link : helps us to create link and it takes a single arrtribute which defines that if that specific text has been clicked then to which route it will go.
//Navlink: In this , it takes one more extra attribute - activeStyle with which we can identify just by looking 

export default Navbar
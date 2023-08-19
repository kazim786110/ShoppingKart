import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  
      const li=[]
      const l2=[]
  
    const Mustafa = "Kazim"
    const handleOnclick = ()=>{
      li.push("Suri")
      console.log(li)
      
      
      console.log("hello WOrld")}
    const Suri = ()=>{
      l2.push("hassan")
      console.log(l2)

      
      
      
    }
      const Services =()=>{
        console.log("kazim randi ka bacha")
      }
      
      

  return (

<nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-list">
          <li   onClick={handleOnclick} className="navbar-item">Home</li>
          <li  onClick={Suri} className="navbar-item">About</li>
          <li onClick={Services} className="navbar-item">Services</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
        
  )
}

export default Navbar
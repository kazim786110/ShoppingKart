import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    const Mustafa = "Kazim"
    const handleOnclick = ()=>{console.log("hello WOkrd")}
    const Suri = ()=>{console.log("hello Suri")}
    

  return (

<nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-list">
          <li   onClick={handleOnclick} className="navbar-item">Home</li>
          <li  onClick={Suri} className="navbar-item">About</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
        
  )
}

export default Navbar
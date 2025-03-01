import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
             <Link className="navbar-brand" to="/"><h2>FULLSTACK</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
         <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/course">courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>     
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default header
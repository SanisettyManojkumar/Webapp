import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminHeader = () => {

  let nav= useNavigate();
  let logout=()=>{
    nav('/adminlogin')
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <div className="container ">
                   <Link className="navbar-brand" to=""><h2>FULLSTACK</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registerdetails">Register History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admincourse">Admin Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/table">Table</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={logout}>Log Out</button>
              </li>     
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminHeader
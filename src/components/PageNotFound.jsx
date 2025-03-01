import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
       <div className='text-center text-danger my-5'>
        <h1>Page not found</h1>
        <Link to="/" className='btn btn-danger'>Go to Home page</Link>
       </div>
    </>
  )
}

export default PageNotFound
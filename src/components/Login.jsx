import React from 'react'
import Header from './Header'
import Footer from './footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <Header />
        <div className='Containers'>
        <div className='headers'>
            <div className='titles'>
                Login
            </div>
        </div>
        <form >
        <div className='inders'>
            <div className='inder'>
                <input 
                type='email'
                name='email'
                placeholder='Enter Email Address'
                
                />
            </div>
            <div className='inder'>
                <input 
                type='password'
                name='password'
                placeholder='Enter password'
                
                />
            </div>
        <button type='submit' className="submit">SUBMIT</button>
        <p>Don't have an Account</p>
        <Link to="/register" >Register</Link>
        </div> 
        </form>
       </div>
        <Footer />
        </>
        
  )
}

export default Login
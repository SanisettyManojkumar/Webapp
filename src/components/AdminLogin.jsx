import React, { useState } from 'react';
import Footer from './footer';
import '../css/register.css'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  let defaultUserName ="SAdmin";
  let defaultPassword ="i0G38rAor64c";

  const handleLogin = (e) =>{
    e.preventDefault();
  console.log(userName,password);
  

  if(userName === defaultUserName && password === defaultPassword) {

    navigate('/admin');
  } else {

    setError('Invalid userName or Password');
  }
};
  return (
    <>
     
      <div className='Containers'>
        <div className='headers'>
            <div className='titles'>
              <h2 className='color'>C-TRACE</h2>
              <h5>Welcome Back !</h5>
              <p>Sign in to continue to C-Trace</p>
              </div>
        </div>
        <form onSubmit={handleLogin}>
        <div className='inders'>
            <div className='inder'>
                <input 
                type='text'
                name='username'
                placeholder='Enter UserName'
                value={userName}
                required
               onChange={(e) => setUserName(e.target.value)} 
                />
            </div>
            <div className='inder'>
                <input 
                type='password'
                name='password'
                placeholder='Enter password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {error && <p className='error'>{error}</p>}
        <button type='submit' className="submit">Log In</button>
        
        </div> 
        </form>
       </div>
      <Footer />  
    </>
  )
}

export default AdminLogin


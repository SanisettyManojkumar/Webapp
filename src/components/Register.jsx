import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import '../css/register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [uname, setUname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('')

    // Validation function
    const validateForm = () => {
        const errors = {};
        
        // Username validation
        if (!uname.trim()) {
            errors.uname = 'Name is required';
        }

        // Mobile validation
        if (!mobile.trim()) {
            errors.mobile = 'Mobile is required';
        } else if (!/^\d{10}$/.test(mobile)) {
            errors.mobile = 'Mobile number must be 10 digits';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Email is not valid';
        }

        // Password validation
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Proceed to submit the data
            axios.post("http://localhost:3001/userdetails", { uname, mobile, email, password })
                .then((result) => {
                   if(result.data.exists) {
                    setResponseMessage('Email or Mobile already exists!');
                   }  else {
                       setTimeout(() =>{
                        navigate('/dashboard');
                       },3000)
                   }
                   
                })
                .catch((err) => {
                    console.error(err);
                    setResponseMessage('An error occured. please try again later')
                });
        }
           
    };

    return (
        <>
            <Header />
            <div className='Containers'>
                <div className='headers'>
                    <div className='titles'>Register</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='inders'>
                        <div className='inder'>
                            <input
                                type='text'
                                name='uname'
                                placeholder='Enter User Name'
                                value={uname}
                                onChange={(e) => setUname(e.target.value)}
                            />
                            {formErrors.uname && <p className='fw-bold text-danger'>{formErrors.uname}</p>}
                        </div>
                        <div className='inder'>
                            <input
                                type='tel' // Correct type for mobile
                                name='mobile'
                                placeholder='Enter Mobile Number'
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            {formErrors.mobile && <p className='fw-bold text-danger'>{formErrors.mobile}</p>}
                        </div>
                        <div className='inder'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {formErrors.email && <p className='fw-bold text-danger'>{formErrors.email}</p>}
                        </div>
                        <div className='inder'>
                            <input
                                type='password'
                                name='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {formErrors.password && <p className='fw-bold text-danger'>{formErrors.password}</p>}
                        </div>
                        <button type='submit' className='submit'>
                            Register
                        </button>
                        <p>Already have an Account?</p>
                        <Link to="/login">LOGIN</Link>
                    </div>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div><br />
            <Footer />
        </>
    );
};

export default Register;

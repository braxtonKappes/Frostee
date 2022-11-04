import './SignUp.css'
import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) setEmail(user.email)
  }, [isLoading, user?.email])

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newUser = {username: userName, email}


    const fetchData = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (fetchData?.errors) {
      setErrors(fetchData.errors);
    } 

    // TODO update profile values
  };

  if (!isLoading) {
    return (
      <div className='signup-wrapper'>
        <div className="signup-body">
          <div className="signup-content">
            <form onSubmit={handleSubmit} className="signup-form">

              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>

              <input
                type="text"
                className='email-input'
                value={email}
                disabled
              />
              <p className="username-text">Username</p>
              <input
                type="text"
                className='signup-input'
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
              />
              <button type='submit' className="signup-confirm">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default SignUp

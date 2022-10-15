import './SignUp.css'
import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

function SignUp() {
  // const dispatch = useDispatch();
  // const [errors, setErrors] = useState([]);
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const { user } = useAuth0();
  console.log(user)
  setEmail(user.email)

  return (
    <div className='signup-wrapper'>
      <div className="signup-body">
        <div className="signup-content">
          <form action="" className="signup-form">
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
            <button className="signup-confirm">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp

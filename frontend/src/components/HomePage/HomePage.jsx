import './HomePage.css'
import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignUpComponent, setShowSignUpComponent] = useState(false)

  return (
    <div className='login-wrapper'>
      <div className="login-body">
        <div className="login-content">
          <form action="" className="login-form">
            <h1 className="login-page-title">Sign In</h1>
            <div className="email-input">
              <input
              type="text"
              className="email-input"
              placeholder='Email or Username'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              />
            </div>
            <div className="password-input">
              <input
              type="password"
              className="password-input"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage

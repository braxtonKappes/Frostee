import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) setEmail(user.email)
  }, [isLoading, user?.email])

  if (!isLoading) {
    return (
      <div className='profile-wrapper'>
        <div className="profile-body">
          <div className="profile-content">
            <form onSubmit={handleSubmit} className="profile-form">

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
                className='profile-input'
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
              />
              <button type='submit' className="profile-confirm">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Profile;
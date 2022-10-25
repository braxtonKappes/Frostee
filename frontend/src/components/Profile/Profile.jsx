import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../../store/api/frostyApi';


function Profile() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [createUser, response ] = useCreateUserMutation();
  const { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isLoading) setEmail(user.email)
  }, [isLoading, user?.email])


  const useHandleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newUser = {username: userName, email};

    const data = await createUser(newUser);

    if (data && data.error) {
      for (let val in data) {
        errors.push(data[val].data)
      }
    }
  }

  if (!isLoading) {
    return (
      <div className='profile-wrapper'>
        <div className="profile-body">
          <div className="profile-content">
            <form onSubmit={useHandleSubmit} className="profile-form">

              <div>
                {errors?.map((error, ind) => (
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
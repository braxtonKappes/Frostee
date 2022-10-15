import './NavBar.css'
import React from 'react'
// import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar() {
  // const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='navbar-wrapper'>
      <div className="navbar-body">
        <div className="navbar-content">
        <button
        className="signup-btn"
        onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
          redirectUri: 'http://localhost:3000/complete_registration'
        })
      }
    >
      Sign Up
    </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar

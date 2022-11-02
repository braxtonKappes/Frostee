import './NavBar.css'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function NavBar() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='navbar-wrapper'>
      <div className="navbar-body">
        <div className="logo">
          <span className="logo-holder">
            <a href="?"><img src="" width={176} height={44} alt="Frostee Logo" /></a>
          </span>
        </div>
        <div className="navbar-container">
          <a className='menuitem' href="?">STORE</a>
          <a className='menuitem' href="?">COMMUNITY</a>
          <a className='menuitem' href="?">ABOUT</a>
          <a className='menuitem' href="?">SUPPORT</a>
        </div>
        <div className="navbar-spacer"></div>
        <div className="navbar-actions">
          <button
            className='login-btn'
            onClick={()=>
              loginWithRedirect()
            }
          >
          login
          </button>
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

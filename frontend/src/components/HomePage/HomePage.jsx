import './HomePage.css'
// eslint-disable-next-line
import React, { useState } from 'react'

function HomePage() {

  return (
    <div className='homepage-wrapper'>
      <div className="homepage-banner-body">
        <img src="" alt="" className="homepage-banner-img" />
        <div className="store-navbar-body">
          <div className="store-navbar-content">
            <div className="store-navbar-links">
              <h3>Your Store</h3>
              <h3>New & Noteworthy</h3>
              <h3>Categories</h3>
              <h3>Points Shop</h3>
              <h3>News</h3>
              <h3>Labs</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-body">
        <div className="homepage-gutter">
          <div className="homepage-gutter-block">
            <div className="homepage-gutter-header">
              <a href=""></a>
              <br />Gift Cards
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

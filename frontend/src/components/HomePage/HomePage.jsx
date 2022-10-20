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
              <a href="?"></a>
              <br />
              <h1 className="homepage-gutter-header-title">GIFT CARDS</h1>
              <a href="?">Now Available on Frosty</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">RECOMMENDED</h1>
              <a href="?">By Friends</a>
              <a href="?">By Curators</a>
              <a href="?">Tags</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">DISCOVERY QUEUES</h1>
              <a href="?">Recommendations</a>
              <a href="?">New Releases</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">BROWSE CATEGORIES</h1>
              <a href="?">Top Sellers</a>
              <a href="?">Upcoming</a>
              <a href="?">Specials</a>
              <a href="?">VR Titles</a>
              <a href="?">Controller-Friendly</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">BROWSE BY GENRE</h1>
              <a href="?">Free to Play</a>
              <a href="?">Early Access</a>
              <a href="?">Action</a>
              <a href="?">Adventure</a>
              <a href="?">Casual</a>
              <a href="?">Indie</a>
              <a href="?">Massively Multiplayer</a>
              <a href="?">Racing</a>
              <a href="?">RPG</a>
              <a href="?">Simulation</a>
              <a href="?">Sports</a>
              <a href="?">Strategy</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">RECENTLY VIEWED</h1>
              /* query database for recently viewed */
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

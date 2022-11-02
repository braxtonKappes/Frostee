import './HomePage.css'
// eslint-disable-next-line
import React, { useState } from 'react'
import HomePageGutter from '../HomePageGutter'
import SearchNavBar from '../SearchNavBar'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homepage-wrapper'>
      <SearchNavBar/>
      <div className="homepage-banner-body">
        <img src="" alt="" className="homepage-banner-img" />
      </div>
      <HomePageGutter />
      <div className="homepage-body">
        <div className="homepage-featured-recommended">
          
        </div>
      </div>
    </div>
  )
}

export default HomePage

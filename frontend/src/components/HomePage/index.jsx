import './HomePage.css'
// eslint-disable-next-line
import React, { useState } from 'react'
import HomePageGutter from '../HomePageGutter'
import SearchNavBar from '../SearchNavBar'
import './HomePage.css'
import Carousel from '../Carousel/Carousel.js'

function HomePage() {
  return (
    <div className='homepage-wrapper'>
      <SearchNavBar/>
      <div className="homepage-contents">
        <div className="homepage-banner-body">
          <img src="" alt="" className="homepage-banner-img" />
        </div>
        <HomePageGutter />
        <div className="homepage-body">
          <div className="homepage-featured-recommended">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

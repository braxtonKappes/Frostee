import './HomePage.css'
// eslint-disable-next-line
import React, { useState } from 'react'
import Carousel from '../Carousel'
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
      <div className="homepage-body">
        <HomePageGutter />
        <Carousel/>
        <div className="homepage-featured-recommended">
        </div>
      </div>
    </div>
  )
}

export default HomePage

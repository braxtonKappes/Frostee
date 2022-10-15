import './HomePage.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div className='homepage-wrapper'>
      <div className="homepage-body">
        <div className="homepage-content">
        </div>
      </div>
    </div>
  )
}

export default HomePage

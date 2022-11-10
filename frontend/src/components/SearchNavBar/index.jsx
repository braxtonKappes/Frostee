import React, { Component } from 'react'
import './SearchNavBar.css'

export default class index extends Component {
  render() {
    return (
      <div className="search-navbar-body">
        <div className="search-navbar-content">
            <div className="tab">
              <a href="?" className="dropdown-tab">Your Store</a>
              <span className="dropdown-content">
                <a href="?" className='dropdown-menu-item'>Home</a>
                <a href="?" className='dropdown-menu-item'>Community Recommendations</a>
                <a href="?" className='dropdown-menu-item'>Recently Viewed</a>
                <a href="?" className='dropdown-menu-item'>Steam Curators</a>
              </span>
            </div>
            <div className="tab">
              <a href="?" className="dropdown-tab">New & Noteworthy</a>
              <span className="dropdown-content">
              </span>
            </div>
            <div className="tab">
              <a href="?" className="dropdown-tab">Categories</a>
              <span className="dropdown-content">
              </span>
            </div>
            <a href="?" className="tab">Points Shop</a>
            <a href="?" className="tab">News</a>
            <a href="?" className="tab">Labs</a>
        </div>
      </div>
    )
  }
}

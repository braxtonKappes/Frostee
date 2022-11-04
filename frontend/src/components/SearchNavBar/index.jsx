import React, { Component } from 'react'
import './SearchNavBar.css'

export default class index extends Component {
  render() {
    return (
      <div className="search-navbar-body">
        <div className="search-navbar-content">
          <div className="search-navbar-links">
            <div className="tab">
              <span className="dropdown">
                <a href="?" className="dropdown-tab">Your Store</a>
              </span>
            </div>
            <div className="tab">
              <span className="dropdown">
                <a href="?" className="dropdown-tab">New & Noteworthy</a>
              </span>
            </div>
            <div className="tab">
              <span className="dropdown">
                <a href="?" className="dropdown-tab">Categories</a>
              </span>
            </div>
            <a href="?" className="tab">Points Shop</a>
            <a href="?" className="tab">News</a>
            <a href="?" className="tab">Labs</a>
          </div>
        </div>
      </div>
    )
  }
}

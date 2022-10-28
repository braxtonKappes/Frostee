import React, { Component } from 'react'
import './SearchNavBar.css'

export default class index extends Component {
  render() {
    return (
      <div className="search-navbar-body">
        <div className="search-navbar-content">
          <div className="search-navbar-links">
            <h3>Your Store</h3>
            <h3>New & Noteworthy</h3>
            <h3>Categories</h3>
            <h3>Points Shop</h3>
            <h3>News</h3>
            <h3>Labs</h3>
          </div>
        </div>
      </div>
    )
  }
}

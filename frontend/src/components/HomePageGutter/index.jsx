import React, { Component } from 'react'
import './HomePageGutter.css'

export default class index extends Component {
  render() {
    return (
      <div className="homepage-gutter">
          <div className="homepage-gutter-block">
            <div className="homepage-gutter-header">
              <a href="?">Image</a>
              <br />
              <h1 className="homepage-gutter-header-title">GIFT CARDS</h1>
              <a href="?" className='gutter-tab'>Now Available on Frostee</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">RECOMMENDED</h1>
              <a href="?" className='gutter-tab'>By Friends</a>
              <a href="?" className='gutter-tab'>By Curators</a>
              <a href="?" className='gutter-tab'>Tags</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">DISCOVERY QUEUES</h1>
              <a href="?" className='gutter-tab'>Recommendations</a>
              <a href="?" className='gutter-tab'>New Releases</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">BROWSE CATEGORIES</h1>
              <a href="?" className='gutter-tab'>Top Sellers</a>
              <a href="?" className='gutter-tab'>Upcoming</a>
              <a href="?" className='gutter-tab'>Specials</a>
              <a href="?" className='gutter-tab'>VR Titles</a>
              <a href="?" className='gutter-tab'>Controller-Friendly</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">BROWSE BY GENRE</h1>
              <a href="?" className='gutter-tab'>Free to Play</a>
              <a href="?" className='gutter-tab'>Early Access</a>
              <a href="?" className='gutter-tab'>Action</a>
              <a href="?" className='gutter-tab'>Adventure</a>
              <a href="?" className='gutter-tab'>Casual</a>
              <a href="?" className='gutter-tab'>Indie</a>
              <a href="?" className='gutter-tab'>Massively Multiplayer</a>
              <a href="?" className='gutter-tab'>Racing</a>
              <a href="?" className='gutter-tab'>RPG</a>
              <a href="?" className='gutter-tab'>Simulation</a>
              <a href="?" className='gutter-tab'>Sports</a>
              <a href="?" className='gutter-tab'>Strategy</a>
            </div>
            <div className="homepage-gutter-header">
              <h1 className="homepage-gutter-header-title">RECENTLY VIEWED</h1>
                Render recently viewed games here
            </div>
          </div>
        </div>
    )
  }
}

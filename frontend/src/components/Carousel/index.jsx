import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import logo1 from '../../logo.svg'
import React, { Component } from 'react'

export default class myCarousel extends Component {
  render() {
    return (
      <Carousel showArrows={true} showThumbs={true}>
        <div className='cara-bg1'>
          <img src={logo1} alt="" />
          <p className='legend'>legend1</p>
        </div>
        <div className='cara-bg2'>

        </div>
        <div className='cara-bg3'>

        </div>
        <div className='cara-bg4'>

        </div>
        <div className='cara-bg4'>

        </div>
      </Carousel>
    )
  }
}

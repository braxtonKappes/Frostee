import React from "react";
import "./Carousel.css";

function Carousel({ games }) {

  let currentSlide = 0;

  const handleClick = (direction) => {


    const slide = document.getElementById(currentSlide);
    const thumb = document.getElementById(`thumb-${currentSlide}`);
    const maxSize = games.length - 1;
    let newVal;

    if (direction === 'prev') {

      if (currentSlide > 0) {
        newVal = currentSlide - 1;
        currentSlide = newVal;
      } else {
        currentSlide = maxSize;
      } 

    } else if (direction === 'next') {

      if (currentSlide < maxSize) {
        newVal = currentSlide + 1;
        currentSlide = newVal;
      } else {
        currentSlide = 0;
      }

    } else {
      newVal = direction;
      currentSlide = newVal;
    }

    const nextSlide = document.getElementById(currentSlide);
    const nextThumb = document.getElementById(`thumb-${currentSlide}`);

    slide.style.opacity = 0;
    nextSlide.style.opacity = 1;

    thumb.classList.toggle('active-thumb');
    nextThumb.classList.toggle('active-thumb');

  }



  return (
    <>
    <div className="carousel-wrapper">

      <div className="arrow-cont">
        <div onClick={() => handleClick('prev')} className="arrow arrow-left"></div>
      </div>
      
      <div className="carousel-container">

        <div className="carousel-content">

          <div className="carousel-main">

            {games && games.map((game, ind) => {

              return (
                <div className="carousel-slide" id={ind} style={ind === 0 ? {'opacity':'1'} : {'opacity':'0'}}>

                  <img src={game.title_image}></img>

                  <div className="carousel-slide-side"> 
                  <div className="carousel-slide-side-top">
                    <h2>{game.title}</h2>
                  </div>
                  
                  <div className="carousel-slide-side-images">
                    {games && game.images.map((image, ind) => {

                      if (ind >= 4) return;

                      return (
                        <img src={image}></img>
                      ) 
                    })}
                  </div>
                  
                  </div>
                </div>
              )
            })}
            
          </div>

        </div>

      </div>

      <div className="arrow-cont">
        <div onClick={() => handleClick('next')} className="arrow arrow-right"></div>
      </div>

    </div>

    <div className="carousel-thumbs">
      {games && games.map((game, ind) => {
        return (
          <div onClick={() => handleClick(ind)} id={`thumb-${ind}`} className={ind === 0 ? "carousel-thumb active-thumb" : "carousel-thumb"}></div>
        )
      })}
    </div>
    </>
  )



}


export default Carousel;
import React from "react";
import "./Carousel.css";

function SpecialsCarousel({ games }) {

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

              {games && games.map((currentGames, ind) => {

                return (
                  <div className="sp-carousel-slide" id={ind} style={ind === 0 ? { 'opacity': '1' } : { 'opacity': '0' }}>

                    <div className="sp-carousel-content">
                      {games && currentGames.images.map((game, id) => {
                        
                        let dealStr = "Today's deal!";

                        return (
                            <div id={`sp-carousel-${id}`} className="sp-carousel-fr">
                              <img src={game}></img>
                              <div id={`sp-banner-${id}`} className="sp-carousel-banner">
                                {dealStr}
                              </div>
                            </div>
                        )
                      })}
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


export default SpecialsCarousel;
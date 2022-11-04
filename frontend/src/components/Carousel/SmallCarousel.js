import React from "react";
import "./Carousel.css";

function SmallCarousel({ games }) {

  let currentSlide = 0;
  const remainder = games.length % 4;
  const isEven = remainder === 0;
  const groupedGames = [];

  for (let i = 0; i < games.length; i += 4) {
    if ((i + 4) < games.length || isEven) {
      groupedGames.push([games[i], games[i+1], games[i+2], games[i+3]])
    } else {

      const prevGroup = groupedGames[groupedGames.length - 1];

      if (remainder === 3) groupedGames.push([prevGroup[1], prevGroup[2], prevGroup[3], games[i]]);
      else if (remainder === 2) groupedGames.push([prevGroup[2], prevGroup[3], games[i], games[i+1]]);
      else if (remainder === 1) groupedGames.push([prevGroup[3], games[i], games[i+1], games[i+2]]);
    }
  }



  const handleClick = (direction) => {


    const slide = document.getElementById(currentSlide);
    const thumb = document.getElementById(`thumb-${currentSlide}`);
    const maxSize = groupedGames.length - 1;
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

        <div className="sm-carousel-container">

          <div className="carousel-content">

            <div className="carousel-main">

              {groupedGames && groupedGames.map((list, ind) => {

                return (
                  <div className="sm-carousel-slide" id={ind} style={ind === 0 ? { 'opacity': '1' } : { 'opacity': '0' }}>

                    <div className="sm-carousel-content">
                      {groupedGames && list.map((game, id) => {
                        return (
                          <div id={`sm-carousel-${id}`} className="sm-carousel-fr">
                            <img src={game?.title_image}></img>
                            <div className="sm-carousel-banner"></div>
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
        {groupedGames && groupedGames.map((sm, ind) => {
          return (
            <div onClick={() => handleClick(ind)} id={`thumb-${ind}`} className={ind === 0 ? "carousel-thumb active-thumb" : "carousel-thumb"}></div>
          )
        })}
      </div>
    </>
  )

}

export default SmallCarousel;
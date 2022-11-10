import React from "react";
import "./Carousel.css";

function Carousel() {
  const games = [

    {title: "game 1", info: "game info here", title_image:"images/building.png", images: ["images/building.png","images/building.png","images/building.png","images/building.png"]},
    {title: "game 2", info: "game info here", title_image:"images/cat.png", images: ["images/cat.png","images/cat.png","images/cat.png","images/cat.png"]},
    {title: "game 3", info: "game info here", title_image:"images/fish.jpg", images: ["images/fish.jpg","images/fish.jpg","images/fish.jpg","images/fish.jpg"]},
    {title: "game 4", info: "game info here", title_image:"images/landscape.jpg", images: ["images/landscape.jpg","images/landscape.jpg","images/landscape.jpg","images/landscape.jpg"]},
    {title: "game 5", info: "game info here", title_image:"images/lightning.png", images: ["images/lightning.png","images/lightning.png","images/lightning.png","images/lightning.png"]},
    {title: "game 6", info: "game info here", title_image:"images/owl.jpg", images: ["images/owl.jpg","images/owl.jpg","images/owl.jpg","images/owl.jpg"]},

  ];

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

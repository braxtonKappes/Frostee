import React from "react";
import "./Carousel.css";

function CategoryCarousel({ categories }) {

  let currentSlide = 0;
  const remainder = categories.length % 4;
  const isEven = remainder === 0;
  const groupedCategories = [];

  for (let i = 0; i < categories.length; i += 4) {
    if ((i + 4) < categories.length || isEven) {
      groupedCategories.push([categories[i], categories[i+1], categories[i+2], categories[i+3]])
    } else {

      const prevGroup = groupedCategories[groupedCategories.length - 1];

      if (remainder === 3) groupedCategories.push([prevGroup[1], prevGroup[2], prevGroup[3], categories[i]]);
      else if (remainder === 2) groupedCategories.push([prevGroup[2], prevGroup[3], categories[i], categories[i+1]]);
      else if (remainder === 1) groupedCategories.push([prevGroup[3], categories[i], categories[i+1], categories[i+2]]);
    }
  }

  const handleClick = (direction) => {

    const slide = document.getElementById(currentSlide);
    const thumb = document.getElementById(`thumb-${currentSlide}`);
    const maxSize = groupedCategories.length - 1;
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

        <div className="ct-carousel-container">

          <div className="carousel-content">

            <div className="carousel-main">

              {groupedCategories && groupedCategories.map((list, ind) => {

                return (
                  <div className="ct-carousel-slide" id={ind} style={ind === 0 ? { 'opacity': '1' } : { 'opacity': '0' }}>

                    <div className="ct-carousel-content">
                      {groupedCategories && list.map((category, id) => {
                        return (
                          <div id={`ct-carousel-${id}`} className="ct-carousel-fr">
                            <img src={category.title_image}></img>
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
        {groupedCategories && groupedCategories.map((ct, ind) => {
          return (
            <div onClick={() => handleClick(ind)} id={`thumb-${ind}`} className={ind === 0 ? "carousel-thumb active-thumb" : "carousel-thumb"}></div>
          )
        })}
      </div>
    </>
  )

}

export default CategoryCarousel;
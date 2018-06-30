import React from 'react';
import Room from './room';

const Carousel = (props) => {
  
  const renderCarouselColumn = (n) => {
    const start = n * 3;
    const end = start + 3;
    const isActive = !n;
    const carouselColumnArray = [];
    
    if(props.feature.length !== 0) {
      for(let i = start; i < end; i ++) {
        carouselColumnArray.push(
          <Room data={props.feature[i]} inCarousel={true} />
        )
      }
    }
    
    return (
      <div className={"carousel-item " + (isActive ? "active" : "")}>
        <div className="carousel-item-container">
        {carouselColumnArray}
        </div>
      </div>
    )
  }

  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        {[0, 1, 2].map((n) => renderCarouselColumn(n) )}
      </div>

      <a class="carousel-control carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
import React from 'react';

const LeftPanel = () => {

  const renderCarousel = () => {

    return (
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-item-container">
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/YYmI8Uz.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/RZrxsVG.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/ZWSZGKj.jpg" alt="Third slide"/>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-item-container">
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/kXcZdiS.jpg" alt="Second slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/RZrxsVG.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/YYmI8Uz.jpg" alt="First slide"/>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-item-container">
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/YYmI8Uz.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/ZWSZGKj.jpg" alt="Third slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/kXcZdiS.jpg" alt="Second slide"/>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
  
  return (
    <div className="leftpanel">
      <div className="lp-header">
        <img id="main-logo" src="http://www.stickpng.com/assets/images/58482332cef1014c0b5e49be.png" alt="logo" />
      </div>

      <div className="lp-content">
        
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link">Featured</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Subscriptions</a>
          </li>
        </ul>

        {renderCarousel()}

      </div>
    </div>
  );
}

export default LeftPanel;
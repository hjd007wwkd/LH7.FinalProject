import React from 'react';

const LeftPanel = () => {

  const renderCarousel = () => {

    return (
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <div class="carousel-item-container">
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Third slide"/>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="carousel-item-container">
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Second slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-item-container">
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Third slide"/>
              <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Second slide"/>
            </div>
          </div>
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
  
  return (
    <div className="leftpanel">
      <div className="lp-header">
        <img id="main-logo" src="https://i.imgur.com/7ipEuOI.jpg" alt="logo" />
      </div>

      <div className="lp-content">
        <p>Featured Streams</p>
        {renderCarousel()}
      </div>
    </div>
  );
}

export default LeftPanel;
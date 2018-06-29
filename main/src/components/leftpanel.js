import React from 'react';
import Carousel from './carousel';

const LeftPanel = () => {

  return (
    <div className="leftpanel">
      <div className="lp-header">
        <img id="main-logo" src="https://i.imgur.com/7ipEuOI.jpg" alt="logo" />
      </div>

      <div className="lp-content">
        <p>Featured Streams</p>
        <Carousel />
      </div>
    </div>
  );
}

export default LeftPanel;


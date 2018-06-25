import React from 'react';

const userArray = [ 1, 2, 3, 4 ];

function renderVideos() {
  return userArray.map((pic) => {
    return (
      <div className="video">
        <img src="https://i.imgur.com/WoFLlzP.jpg" alt="user" />
        <p>User{pic}</p>  
      </div>
    );
  })
}

const VideoPanel = () => {
  return (
    <div id="video-panel">
      <header>
        VIDEO HEADER
      </header>
      <div id="video-container">
        {renderVideos()}
      </div>
      <div id="video-user">
      </div>
    </div>
  );
}

export default VideoPanel;
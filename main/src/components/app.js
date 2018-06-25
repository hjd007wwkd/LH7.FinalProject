import React, { Component } from 'react';
import SideBar from './sidebar';
import Main from './main-content';
import VideoPanel from './video-panel';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <Main />
        <VideoPanel />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';
import SideBar from './sidebar';
import Main from './main-content';
import VideoPanel from './video-panel';

class App extends Component {
  constructor() {
    super();
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: '',
      autoRemoveVideos: true,
      autoRequestMedia: false,
      detectSpeakingEvents: true,
      autoAdjustMic: false,
      media: {
          audio: true,
          video: true
      },
      username: 'user',
      url: 'https://warm-garden-36395.herokuapp.com'
    });

    this.handleVideoOn = this.handleVideoOn.bind(this);
    this.handleVideoOff = this.handleVideoOff.bind(this);
  }

  handleVideoOn() {
    this.webrtc.startLocalVideo();
  }

  handleVideoOff() {
    this.webrtc.stopLocalVideo();
    this.webrtc.sendToAll('removeVideo', {peer: this.webrtc.connection.getSessionid()});
  }

  componentDidMount() {
    this.webrtc.on('connectionReady', () => {
      this.webrtc.joinRoom('room');
    });

    this.webrtc.on('readyToCall', () => {
      this.webrtc.leaveRoom('room');
      this.webrtc.joinRoom('room');
    });

    this.webrtc.connection.on('message', (data) => {
      if (data.type === 'removeVideo') {
        const videos = document.getElementById('video-container');
        const el = document.getElementById(data.payload.peer ? 'container_' + data.payload.peer + '_video_incoming' : 'localScreenContainer');
        if (videos && el) {
          videos.removeChild(el);
        }
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <Main />
        <VideoPanel handleVideoOn={this.handleVideoOn} handleVideoOff={this.handleVideoOff} webrtc={this.webrtc}/>
      </div>
    );
  }
}

export default App;

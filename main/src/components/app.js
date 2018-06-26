import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';
import SideBar from './sidebar';
import Main from './main-content';
import VideoPanel from './video-panel';

class App extends Component {
  constructor() {
    super();
    this.hasJoinedRoom = false;
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: '',
      autoRequestMedia: false,
      detectSpeakingEvents: true,
      autoAdjustMic: false,
      media: {
          audio: true,
          video: true
      },
      username: 'user',
      url: 'https://server-eobkqxciyb.now.sh'
    })
    this.handleVideoOn = this.handleVideoOn.bind(this);
    this.handleVideoOff = this.handleVideoOff.bind(this);
  }

  handleVideoOn() {
    this.webrtc.startLocalVideo();
  }

  handleVideoOff() {
    this.webrtc.stopLocalVideo();
    this.webrtc.sendToAll('chat', {peer: this.webrtc.connection.getSessionid()});
  }

  componentDidMount() {
    this.webrtc.on('connectionReady', () => { 
      if (!this.hasJoinedRoom){
        this.hasJoinedRoom = true;
        this.webrtc.joinRoom('room');
      }
    });
    this.webrtc.on('readyToCall', () => {
      if (!this.hasJoinedRoom){
        this.hasJoinedRoom = true;
        this.webrtc.joinRoom('room');
      }
    });
    this.webrtc.on('localStream', () => {
      if (this.hasJoinedRoom){
        this.hasJoinedRoom = false;
        this.webrtc.leaveRoom();
        this.hasJoinedRoom = true;
        this.webrtc.joinRoom('room');
      }
    });
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

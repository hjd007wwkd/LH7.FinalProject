import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';
import SideBar from './sidebar';
import Main from './main-content';
import VideoPanel from './video-panel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: 'hjd',
        userId: 1
      },
      room: {
        roomname: 'roomNn',
        roomId: 1
      },
      peers: [],
      messages: []
    }

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
      url: 'https://ancient-forest-74575.herokuapp.com/'
    });

    this.handleVideoOn = this.handleVideoOn.bind(this);
    this.handleVideoOff = this.handleVideoOff.bind(this);
    this.handleMessageAdd = this.handleMessageAdd.bind(this);
  }

  componentDidMount() {
    this.webrtc.on('connectionReady', () => {
      this.webrtc.joinRoom(this.state.room.roomname);
      this.webrtc.connection.emit('setUsername', this.state.user.username);
    });

    this.webrtc.on('readyToCall', () => {
      this.webrtc.leaveRoom(this.state.room.roomname);
      this.webrtc.joinRoom(this.state.room.roomname);
      this.webrtc.connection.emit('setUsername', this.state.user.username);
    });

    this.webrtc.connection.on('message', (data) => {
      if (data.type === 'removeVideo') {
        const videos = document.getElementById('video-container');
        const el = document.getElementById(data.payload.peer ? 'container_' + data.payload.peer + '_video_incoming' : 'localScreenContainer');
        if (videos && el) {
          videos.removeChild(el);
        }
      } else if (data.type === 'initMsg') {
        this.setState(() => (
          data.payload
        ))
      } else if (data.type === 'addMsg') {
        this.setState((prevState) => ({
          messages: [...prevState.messages, data.message.message]
        }))
      } else if (data.type === 'addPeerInfo') {
        const index = data.peers.indexOf(this.state.user.username);
        if (index > -1) {
          data.peers.splice(index, 1);
        }
        this.setState(() => (
          {peers: data.peers}
        ))
      } else if (data.type === 'removePeerInfo') {
        const index = data.peers.indexOf(this.state.user.username);
        if (index > -1) {
          data.peers.splice(index, 1);
        }
        this.setState(() => (
          {peers: data.peers}
        ))
      }
    })
  }

  handleMessageAdd(message) {
    var date = new Date();
    var timestamp = date.getTime();
    const addMessage = {username: this.state.user.username, content: message, created_at: timestamp}
    this.setState((prevState) => ({
      messages: [...prevState.messages, addMessage]
    }))
    this.webrtc.connection.emit('addMsg', {message: addMessage, roomId: 1, userId: 1});
  }

  handleVideoOn() {
    this.webrtc.startLocalVideo();
  }

  handleVideoOff() {
    this.webrtc.stopLocalVideo();
    this.webrtc.sendToAll('removeVideo', {peer: this.webrtc.connection.getSessionid()});
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar userList={this.state.peers} username={this.state.user.username}/>
        <Main handleMessageAdd = {this.handleMessageAdd} messages = {this.state.messages}/>
        <VideoPanel handleVideoOn={this.handleVideoOn} handleVideoOff={this.handleVideoOff} webrtc={this.webrtc}/>
      </div>
    );
  }
}

export default App;

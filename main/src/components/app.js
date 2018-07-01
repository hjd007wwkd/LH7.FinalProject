import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import LioWebRTC from 'liowebrtc';
import { withCookies } from 'react-cookie';
import SideBar from './sidebar';
import Main from './main-content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.cookies.get('username'),
      roomId: this.props.match.params.id,
      peers: [],
      peersVideo: [],
      activePeersId: [],
      messages: [],
      start: false,
      live: false
    };
    this.remoteVideos = {};

    this.generateRemotes = this.generateRemotes.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.handleVideoToggle = this.handleVideoToggle.bind(this);
    this.handleMessageAdd = this.handleMessageAdd.bind(this);
  }
 
  componentDidMount() {
    if(this.props.cookies.get('username')){
      this.webrtc = new LioWebRTC({
        // The local video ref set within your render function
        localVideoEl: this.localVid,
        // Immediately request camera access
        autoRequestMedia: false,
        // The url for your signaling server
        url: 'https://ancient-forest-74575.herokuapp.com/',
        debug: true
      });
      this.webrtc.on('connectionReady', () => {
        this.webrtc.joinRoom(this.state.roomId);
        this.webrtc.connection.emit('setUsername', this.state.username);
      });
      this.webrtc.on('readyToCall', () => {
        this.webrtc.leaveRoom(this.state.roomId);
        this.webrtc.joinRoom(this.state.roomId);
        this.webrtc.connection.emit('setUsername', this.state.username);
      });
      this.webrtc.on('videoAdded', this.addVideo);
      this.webrtc.on('videoRemoved', this.removeVideo);

      this.webrtc.connection.on('message', (data) => {
        if (data.type === 'initMsg') {
          this.setState(() => (
            data.payload
          ))
          console.log(this.state.activePeersId)
        } else if (data.type === 'addMsg') {
          this.setState((prevState) => ({
            messages: [...prevState.messages, data.message.message]
          }))
        } else if (data.type === 'addPeerInfo') {
          const index = data.peers.indexOf(this.state.username);
          if (index > -1) {
            data.peers.splice(index, 1);
          }
          this.setState(() => (
            {peers: data.peers}
          ))
        } else if (data.type === 'removePeerInfo') {
          const index = data.peers.indexOf(this.state.username);
          if (index > -1) {
            data.peers.splice(index, 1);
          }
          this.setState(() => (
            {peers: data.peers}
          ))
        } else if (data.type === 'active') {
          console.log(data);
          const index = data.peers.indexOf(this.webrtc.connection.connection.id);
          if (index > -1) {
            data.peers.splice(index, 1);
          }
          this.setState(() => (
            {activePeersId: data.peers}
          ))
        } else if (data.type === 'disabled') {
          this.setState(() => (
            {activePeersId: data.peers}
          ))
        }
      })
    }
  }

  addVideo(stream, peer){
    this.setState({ peersVideo: [...this.state.peersVideo, peer] }, () => {
      this.webrtc.attachStream(stream, this.remoteVideos[peer.id]);
    });
  }

  removeVideo(peer){
    this.setState({
      peersVideo: this.state.peersVideo.filter(p => !p.closed)
    });
  }

  handleVideoToggle(){
    if(!this.state.start){
      this.webrtc.startLocalVideo()
      this.setState(()=>(
        {start: true, live: true}
      ))
      this.webrtc.connection.emit('activeUser')
    } else if (!this.state.live) {
      this.webrtc.resume()
      this.setState(()=>(
        {live: true}
      ))
      this.webrtc.connection.emit('activeUser')
    } else if (this.state.live) {
      this.webrtc.pause()
      this.setState(()=>(
        {live: false}
      ))
      this.webrtc.connection.emit('disabledUser')
    }
  }

  // Show fellow peers in the room
  generateRemotes(){
    return this.state.peersVideo.map((p) => {
      const style = this.state.activePeersId.includes(p.id) ? {} : {display: 'none'};
      return <div key={p.id} id={`container_${this.webrtc.getContainerId(p)}`} className='video' style={style}>
          <video
            key={this.webrtc.getId(p)}
            // Important: The video element needs both an id and ref
            id={this.webrtc.getId(p)}
            ref={(v) => this.remoteVideos[p.id] = v}
            />
        </div>
  })};

  handleMessageAdd(message) {
    var date = new Date();
    var timestamp = date.getTime();
    const addMessage = {username: this.state.username, content: message, created_at: timestamp}
    this.setState((prevState) => ({
      messages: [...prevState.messages, addMessage]
    }))
    this.webrtc.connection.emit('addMsg', {message: addMessage, roomId: this.state.roomId, username: this.state.username});
  }
 
  disconnect(){
    this.webrtc.connection.emit('disabledUser')
    this.webrtc.stopLocalVideo();
    this.webrtc.leaveRoom();
    this.webrtc.disconnect();
  }
 
  componentDidUnmount() {
    this.disconnect();
  }
 
  render() {
    const style = !this.state.start || !this.state.live ? {display: 'none'} : {};
    const styleActive = this.state.activePeersId.length === 2 ? {display: 'none'} : {};
    return  this.props.cookies.get('username') ? (
      <div className="wrapper">
        <SideBar userList={this.state.peers} username={this.state.username}/>
        <Main handleMessageAdd = {this.handleMessageAdd} messages = {this.state.messages}/>
        <div id="video-panel">
          <header>
            VIDEO HEADER
          <button onClick={this.handleVideoToggle} style={styleActive}>On</button>
          </header>
          <div ref = "videos" id="video-container">
            <div className="video" style={style}>
              <video
                ref={(vid) => { this.localVid = vid; }}
              >
              </video>
            </div>
            {this.generateRemotes()}
          </div>
        </div>
      </div>
    ) : (<Redirect
      to={{
        pathname: "/"
      }}
    />);
  }
}

export default withCookies(App);

import React, { Component } from 'react';
import LioWebRTC from 'liowebrtc';
import SideBar from './sidebar';
import Main from './main-content';

class App extends Component {
  constructor(props) {
    super(props);
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
      this.webrtc.joinRoom(this.state.room.roomname);
      console.log(this.state.room.roomname);
      this.webrtc.connection.emit('setUsername', this.state.user.username);
    });
    this.webrtc.on('readyToCall', () => {
      this.webrtc.leaveRoom(this.state.room.roomname);
      this.webrtc.joinRoom(this.state.room.roomname);
      this.webrtc.connection.emit('setUsername', this.state.user.username);
    });
    this.webrtc.on('videoAdded', this.addVideo);
    this.webrtc.on('videoRemoved', this.removeVideo);

    this.webrtc.connection.on('message', (data) => {
      if (data.type === 'initMsg') {
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
      } else if (data.type === 'active') {
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

  componentDidlUpdate() {
    console.log(this.state.activePeersId);
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
      this.webrtc.connection.emit('active', this.webrtc.connection.connection.id)
    } else if (!this.state.live) {
      this.webrtc.resume()
      this.setState(()=>(
        {live: true}
      ))
      this.webrtc.connection.emit('active', this.webrtc.connection.connection.id)
    } else if (this.state.live) {
      this.webrtc.pause()
      this.setState(()=>(
        {live: false}
      ))
      this.webrtc.connection.emit('disabled', this.webrtc.connection.connection.id)
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
    const addMessage = {username: this.state.user.username, content: message, created_at: timestamp}
    this.setState((prevState) => ({
      messages: [...prevState.messages, addMessage]
    }))
    this.webrtc.connection.emit('addMsg', {message: addMessage, roomId: 1, userId: 1});
  }
 
  disconnect(){
    this.webrtc.connection.emit('disabled', this.webrtc.connection.connection.id)
    this.webrtc.stopLocalVideo();
    this.webrtc.leaveRoom();
    this.webrtc.disconnect();
  }
 
  componentWillUnmount() {
    this.disconnect();
  }
 
  render() {
    const style = !this.state.start || !this.state.live ? {display: 'none'} : {};
    return (
      <div className="wrapper">
        <SideBar userList={this.state.peers} username={this.state.user.username}/>
        <Main handleMessageAdd = {this.handleMessageAdd} messages = {this.state.messages}/>
        <div id="video-panel">
          <header>
            VIDEO HEADER
          <button onClick={this.handleVideoToggle}>On</button>
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
    );
  }
}

export default App;

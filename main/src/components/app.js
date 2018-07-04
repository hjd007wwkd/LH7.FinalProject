import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import LioWebRTC from 'liowebrtc';
import { withCookies } from 'react-cookie';
import SideBar from './sidebar';
import Main from './main';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: props.cookies.get('username'),
        avatar: props.cookies.get('avatar')
      },
      roomId: this.props.match.params.id,
      article: false,
      peers: {},
      peersVideo: [],
      activePeersId: [],
      messages: [],
      whoIsTyping: [],
      videoPanelClass: true,
      videoSize: true,
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
    this.handleTypingStatus = this.handleTypingStatus.bind(this);
    this.receiveTypingStatus = this.receiveTypingStatus.bind(this);
    this.handleResizeVideo = this.handleResizeVideo.bind(this);
  }
 
  componentDidMount() {
    if(this.props.cookies.get('username')){
      this.webrtc = new LioWebRTC({
        // The local video ref set within your render function
        localVideoEl: this.localVid,
        // Immediately request camera access
        autoRequestMedia: false,
        adjustPeerVolume: true,
        peerVolumeWhenSpeaking: 0,
        // The url for your signaling server
        url: 'https://ancient-forest-74575.herokuapp.com/',
        debug: true
      });
      this.webrtc.on('connectionReady', () => {
        this.webrtc.joinRoom(this.state.roomId);
        this.webrtc.connection.emit('setUsername', this.state.user.username, this.state.user.avatar);
      });
      this.webrtc.on('readyToCall', () => {
        this.webrtc.leaveRoom(this.state.roomId);
        this.webrtc.joinRoom(this.state.roomId);
        this.webrtc.connection.emit('setUsername', this.state.user.username, this.state.user.avatar);
      });
      this.webrtc.on('videoAdded', this.addVideo);
      this.webrtc.on('videoRemoved', this.removeVideo);

      this.webrtc.connection.on('message', (data) => {
        if (data.type === 'initMsg') {
          this.setState(() => ({
            messages: data.messages
          }))
        } else if (data.type === 'addMsg') {
          this.setState((prevState) => ({
            messages: [...prevState.messages, data.message.message]
          }))
        } else if (data.type === 'addArticle'){
          this.setState(() => ({
            article: data.article
          }))
        } else if (data.type === 'addPeerInfo') {
          delete data.peers[this.state.user.username];
          this.setState(() => (
            {peers: data.peers}
          ))
        } else if (data.type === 'removePeerInfo') {
          delete data.peers[this.state.user.username];
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
        } else if (data.type === 'typing') {
          this.receiveTypingStatus(data);
        }
      })
    }
  }

  receiveTypingStatus(data) {
    const username = data.username;
    const typingArray = this.state.whoIsTyping
    if(data.isTyping && !typingArray.includes(username)) {
      this.setState((prevState) => ({
        whoIsTyping: [...prevState.whoIsTyping, username]
      }))
    } else if (!isTyping) {
      typingArray.splice(typingArray.indexOf(username), 1)
      this.setState(() => ({
        whoIsTyping: typingArray 
      }))
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
      return <Col md={this.state.videoSize ? "12" : "6"} key={p.id} id={`container_${this.webrtc.getContainerId(p)}`} className='video' style={style}>
          <video
            key={this.webrtc.getId(p)}
            // Important: The video element needs both an id and ref
            id={this.webrtc.getId(p)}
            ref={(v) => this.remoteVideos[p.id] = v}
            />
        </Col>
  })};

  handleMessageAdd(message) {
    const date = new Date();
    const timestamp = date.getTime();
    const addMessage = {username: this.state.user.username, avatar: this.state.user.avatar, content: message, created_at: timestamp}
    this.setState((prevState) => ({
      messages: [...prevState.messages, addMessage]
    }))
    this.webrtc.connection.emit('addMsg', {message: addMessage, roomId: this.state.roomId, username: this.state.user.username});
  }

  handleTypingStatus(isTyping) {
    console.log('emitting ' + this.state.user.username + ' typing status: ' + isTyping)
    this.webrtc.connection.emit('typing', { username: this.state.user.username, isTyping: isTyping })
  }

  handleResizeVideo() {
    this.setState({
      videoPanelClass: !this.state.videoPanelClass,
      videoSize: !this.state.videoSize
    })
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
  // {this.state.article ? <ArticleView article={this.state.article} /> : false }
 
  render() {
    const style = !this.state.start || !this.state.live ? {display: 'none'} : {};
    const styleActive = this.state.activePeersId.length === 2 ? {} : {};
    return  this.props.cookies.get('username') ? (
      <div className="wrapper">
        <SideBar userList={this.state.peers} user={this.state.user}/>
        <Main messages={this.state.messages} article={this.state.article} handleMessageAdd={this.handleMessageAdd} handleTypingStatus={this.handleTypingStatus} />
        
        <div className={this.state.videoPanelClass ? "video-panel not-expanded" : "video-panel expanded"}>
          <header>
            <Button color="secondary" onClick={this.handleVideoToggle} style={styleActive}>
              <i class="fas fa-video"></i>
            </Button>
            <Button color="secondary" onClick={this.handleResizeVideo} style={styleActive}>
              <i class="fas fa-exchange-alt"></i>
            </Button>
          </header>
          <Container ref = "videos" id="video-container">
            <Row>
              <Col md={this.state.videoSize ? "12" : "6"} className="video" style={style}>
                <video ref={(vid) => { this.localVid = vid; }}>
                </video>
              </Col>
              {this.generateRemotes()}
            </Row>
          </Container>
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

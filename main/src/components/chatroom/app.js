import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import LioWebRTC from 'liowebrtc';
import { withCookies } from 'react-cookie';
import SideBar from './sidebar';
import Main from './main';
import {  Button, Col, Container, Navbar, Row } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: props.cookies.get('username'),
        avatar: props.cookies.get('avatar')
      },
      roomId: this.props.match.params.id,
      peers: {},
      peersVideo: [],
      activePeers: {},
      start: false,
      live: false,
      mute: false,
      article: false,
      messages: [],
      bannedBy: [],
      like: 0,
      whoIsTyping: [],
      videoPanelExpanded: false,
      fullVideo: false,
      toggleArticle: true,
      toggleMessageList: true
    };
    this.remoteVideos = {};

    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.generateRemotes = this.generateRemotes.bind(this);
    this.handleVideoToggle = this.handleVideoToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
    this.handleMessageAdd = this.handleMessageAdd.bind(this);
    this.handleLikeToggle = this.handleLikeToggle.bind(this);
    this.handleBannedToggle = this.handleBannedToggle.bind(this);
    this.handleResizeVideo = this.handleResizeVideo.bind(this);
    this.handleMainToggle = this.handleMainToggle.bind(this);
    this.handleTypingStatus = this.handleTypingStatus.bind(this);
    this.receiveTypingStatus = this.receiveTypingStatus.bind(this);
    this.disconnect = this.disconnect.bind(this);
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
          const like = data.peers[this.state.user.username].like
          delete data.peers[this.state.user.username];
          this.setState(() => (
            {peers: data.peers, like: like}
          ))
        } else if (data.type === 'removePeerInfo') {
          delete data.peers[this.state.user.username];
          this.setState(() => (
            {peers: data.peers}
          ))
        } else if (data.type === 'active') {
          delete data.peers[this.webrtc.connection.connection.id];
          this.setState(() => (
            {activePeers: data.peers}
          ))
        } else if (data.type === 'typing') {
          this.receiveTypingStatus(data.peer);
        } else if (data.type === 'addBanned') {
          if(this.state.bannedBy.length + 1 >= Object.keys(this.state.peers).length/4){
            this.webrtc.pause()
            this.setState(()=>(
              {live: false, mute: true}
            ))
            this.webrtc.connection.emit('disabledUser')
          }
          if(!this.state.bannedBy.includes(data.peers)) {
            this.setState((prevState) => (
              {bannedBy: [...prevState.bannedBy, data.peers]}
            ))
          }
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

  // render peer videos in room
  generateRemotes(){
    return this.state.peersVideo.map((p) => {
      const style = this.state.activePeers[p.id] ? {} : {display: 'none'};
      return <div key={p.id} id={`container_${this.webrtc.getContainerId(p)}`} className='video' style={style}>
          <video
            key={this.webrtc.getId(p)}
            // Important: The video element needs both an id and ref
            id={this.webrtc.getId(p)}
            ref={(v) => this.remoteVideos[p.id] = v}
            />
          <div className="video-overlay">
            <div>
              <i class="fas fa-ban" onClick={() => { this.handleBannedToggle(p.id)}}></i>
              <p>{this.state.activePeers[p.id] ? this.state.activePeers[p.id].username : false}</p>
            </div>
          </div>
        </div>
    })
  }

  handleVideoToggle(){
    if(!this.state.start){
      this.webrtc.startLocalVideo();
      this.setState(()=>(
        {start: true, live: true, mute: false}
      ));
      this.webrtc.connection.emit('activeUser');
    } else if (!this.state.live) {
      this.webrtc.resume();
      this.setState(()=>(
        {live: true, mute: false}
      ));
      this.webrtc.connection.emit('activeUser');
    } else if (this.state.live) {
      this.webrtc.pause();
      this.setState(()=>(
        {live: false, mute: true}
      ));
      this.webrtc.connection.emit('disabledUser');
    }
  }

  handleMuteToggle() {
    if(this.state.mute){
      this.webrtc.unmute();
      this.setState(() => ({
        mute: false
      }));
    } else {
      this.webrtc.mute();
      this.setState(() => ({
        mute: true
      }));
    }
  }

  handleMessageAdd(message) {
    const date = new Date();
    const timestamp = date.getTime();
    const addMessage = {username: this.state.user.username, avatar: this.state.user.avatar, content: message, created_at: timestamp};
    this.setState((prevState) => ({
      messages: [...prevState.messages, addMessage]
    }));
    this.webrtc.connection.emit('addMsg', {message: addMessage, roomId: this.state.roomId, username: this.state.user.username});
  }

  handleLikeToggle(username) {
    this.webrtc.connection.emit('like', username);
  }

  handleBannedToggle(id) {
    this.webrtc.connection.emit('banned', id);
  }

  // styling functions
  handleMainToggle(e) {
    const targetID = e.target.id || e.target.parentElement.id;
    this.setState(() => ({
      [targetID]: !this.state[targetID] 
    }), () => {
      if(!this.state.toggleArticle && !this.state.toggleMessageList) {
        this.setState(() => ({
          fullVideo: !this.state.fullVideo
        }));
      }
    });
  }

  handleResizeVideo() {
    if(this.state.fullVideo) {
      this.setState(() => ({
        fullVideo: false,
        videoPanelExpanded: true,
        toggleArticle: false,
        toggleMessageList: true
      }));
    } else {
      this.setState(() => ({
        videoPanelExpanded: !this.state.videoPanelExpanded,
      }));
    }
  }

  handleTypingStatus(isTyping) {
    this.webrtc.connection.emit('typing', { username: this.state.user.username, isTyping: isTyping });
  }

  receiveTypingStatus(data) {
    const username = data.username;
    const typingArray = this.state.whoIsTyping;
    if(data.isTyping && !typingArray.includes(username)) {
      this.setState((prevState) => ({
        whoIsTyping: [...prevState.whoIsTyping, username]
      }));
    } else if (!data.isTyping) {
      typingArray.splice(typingArray.indexOf(username), 1);
      this.setState(() => ({
        whoIsTyping: typingArray 
      }));
    }
  }

  disconnect(){
    this.webrtc.connection.emit('disabledUser');
    this.webrtc.stopLocalVideo();
    this.webrtc.leaveRoom();
    this.webrtc.disconnect();
  }
 
  componentDidUnmount() {
    this.disconnect();
  }

  render() {
    const style = !this.state.start || !this.state.live ? {display: 'none'} : {};
    const styleActive = Object.keys(this.state.activePeers).length === 4 ? {display: 'none'} : {};
    
    return  this.props.cookies.get('username') ? (
      <div className="wrapper chatroom">
        <SideBar 
          peers={this.state.peers} 
          user={this.state.user} 
          like={this.state.like}
          handleLikeToggle={this.handleLikeToggle} 
          />

        {(!this.state.fullVideo) ? (
        <Main 
          messages={this.state.messages} 
          article={this.state.article} 
          isOpen={{ article: this.state.toggleArticle, message: this.state.toggleMessageList }} 
          whoIsTyping={this.state.whoIsTyping}
          handleMessageAdd={this.handleMessageAdd} 
          handleToggle={this.handleMainToggle} 
          handleTypingStatus={this.handleTypingStatus} 
          /> 
        ) : false }

        <div className={"video-panel " + (this.state.fullVideo ? "fullview" : (this.state.videoPanelExpanded ? "expanded" : "not-expanded"))}>
          <Navbar color="dark" inverse expand="md">
            
            {this.state.live ? 
            <Button color="secondary" onClick={this.handleMuteToggle}>
              {this.state.mute ? <i class="fas fa-microphone-slash"></i> : <i class="fas fa-microphone"></i>}
            </Button>
            : false}

            {this.state.bannedBy.length <= Object.keys(this.state.peers).length/4 ? 
            <Button color="secondary" onClick={this.handleVideoToggle} style={styleActive}>
              {this.state.live ? <i class="fas fa-video-slash"></i> : <i class="fas fa-video"></i>}
            </Button>
            : false}

            <Button color="secondary" onClick={this.handleResizeVideo}>
              <i class="fas fa-exchange-alt"></i>
            </Button>
          </Navbar>
          <div ref="videos" id="video-container">
              <div className="video" style={style}>
                <video ref={(vid) => { this.localVid = vid; }}></video>
              </div>
              {this.generateRemotes()}
          </div>
        </div>
      </div>
    ) : (<Redirect to={{ pathname: "/" }}/>);
  }
}

export default withCookies(App);

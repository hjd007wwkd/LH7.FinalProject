import React, { Component }  from 'react';

class VideoPanel extends Component {
  constructor(props) {
    super(props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
  }

  componentDidMount() {
    this.props.webrtc.on('videoAdded', this.addVideo);
    this.props.webrtc.on('videoRemoved', this.removeVideo);
  }

  addVideo(video, peer) {
    const videos = this.refs.videos;
    if (videos) {
      const container = document.createElement('div');
      container.className = 'video';
      container.id = 'container_' + this.props.webrtc.getDomId(peer);
      container.appendChild(video);
      video.oncontextmenu = function() {
        return false;
      };
      videos.append(container);
    }
  }

  removeVideo(video, peer) {
    const videos = this.refs.videos;
    const el = document.getElementById(peer ? 'container_' + this.props.webrtc.getDomId(peer) : 'localScreenContainer');
    if (videos && el) {
      videos.removeChild(el);
    }
  }
  
  render() {
    const style = this.props.hideMyVideo ? {display: 'none'} : {}
    return (
      <div id="video-panel">
        <header>
          VIDEO HEADER
          <button onClick={this.props.handleVideoOn}>On</button>
          <button onClick={this.props.handleVideoOff}>Off</button>
        </header>
        <div ref = "videos" id="video-container">
          <div className="video" style={style}>
            <video className = "local"
                  id = "localVideo"
                  ref = "local">
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPanel;
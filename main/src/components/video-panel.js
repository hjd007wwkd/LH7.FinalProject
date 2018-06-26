import React from 'react';
import RenderVideos from './video';

let users = 0;

class VideoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
  }

  componentDidMount() {
    // this.props.webrtc.on('videoAdded', this.addVideo);
    // this.props.webrtc.on('videoRemoved', this.removeVideo);
    // this.props.webrtc.connection.on('message', (data) => {
      // if (data.type === 'chat') {
      //   console.log(data.payload.peer);
      //   const videos = this.refs.remotes;
      //   const el = document.getElementById(data.payload.peer ? data.payload.peer + '_video_incoming' : 'localScreenContainer');
      //   if (videos && el) {
      //     videos.removeChild(el);
      //   }
      // }
    // })
  }

  addVideo(video, peer) {
    console.log('video added', peer);
    const videos = this.refs.videos;
    console.log(videos);
    if (videos) {
      const container = document.createElement('div');
      container.className = 'video';
      container.id = 'container_' + this.props.webrtc.getDomId(peer);
      container.appendChild(video);
      // suppress contextmenu
      video.oncontextmenu = function() {
        return false;
      };
      videos.append(container);
    }
  }

  removeVideo(video, peer) {
    console.log('video removed ', peer);
    const videos = this.refs.videos;
    const el = document.getElementById(peer ? 'container_' + this.props.webrtc.getDomId(peer) : 'localScreenContainer');
    if (videos && el) {
      videos.removeChild(el);
    }
  }
  
  render() {
    return (
      <div id="video-panel">
        <header>
          VIDEO HEADER
          <button onClick={this.props.handleVideoOn}>On</button>
          <button onClick={this.props.handleVideoOff}>Off</button>
        </header>
        <div ref = "videos" id="video-container">
          <div className="video">
            <video className = "local"
                  id = "localVideo"
                  ref = "local">
            </video>
          </div>
          <div ref = 'remotes' id="remoteVideos">

          </div>
        </div>
      </div>
    );
  }
}

export default VideoPanel;
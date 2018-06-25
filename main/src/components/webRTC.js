import React from 'react';

//main page that combine all the subcomponent
class WebRTC extends React.Component {
    constructor(props) {
        super(props);
        this.addVideo = this.addVideo.bind(this);
        this.removeVideo = this.removeVideo.bind(this);
        this.webrtc = new SimpleWebRTC({
            localVideoEl: 'localVideo',
            remoteVideosEl: '',
            autoRequestMedia: true,
            detectSpeakingEvents: true,
            autoAdjustMic: false,
            media: {
                audio: true,
                video: true
            },
            username: 'user',
            url: 'https://server-ickjzqdkhr.now.sh'
        });
      }
      componentDidMount() {
        this.webrtc.on('readyToCall', () => {
          this.webrtc.joinRoom('roomNm');
          console.log("webrtc component mounted");
          this.webrtc.on('videoAdded', this.addVideo);
          this.webrtc.on('videoRemoved', this.removeVideo);
        });
      }

      addVideo(video, peer) {
        console.log('video added', peer);
        const remotes = this.refs.remotes;
        console.log(remotes);
        if (remotes) {
          const container = document.createElement('div');
          container.className = 'videoContainer';
          container.id = 'container_' + this.webrtc.getDomId(peer);
          container.appendChild(video);
          // suppress contextmenu
          video.oncontextmenu = function() {
            return false;
          };
          console.log(container);
          remotes.append(container);
        }
      }

      removeVideo(video, peer) {
        console.log('video removed ', peer);
        const remotes = this.refs.remotes;
        const el = document.getElementById(peer ? 'container_' + this.webrtc.getDomId(peer) : 'localScreenContainer');
        if (remotes && el) {
          remotes.removeChild(el);
        }
      }

      render() {
        return (
            <div>
                <video className = "local"
                id = "localVideo"
                ref = "local" > </video>
                <div className = "remotes"
                id = "remoteVideos"
                ref = "remotes" > </div>
            </div>
        );
      }
};

export default WebRTC;
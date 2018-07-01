import React, { Component } from 'react';
import io from 'socket.io-client';
import { withCookies } from 'react-cookie';
import LeftPanel from './leftpanel'
import RightPanel from './rightpanel'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRooms: [],
      topics: [],
      featureRooms: [],
      user: {
        username: props.cookies.get('username') || false,

        avatar: props.cookies.get('avatar') || false
      }
    }
    this.socket = io('https://ancient-forest-74575.herokuapp.com/');
    this.clearCookie = this.clearCookie.bind(this);
  }

  componentDidMount() {
    this.socket.on('getNav', (data) => {
      this.setState(() => ({
        topics: data
      }))
    })

    this.socket.on('getRooms', (data) => {
      this.setState(() => ({
        allRooms: data
      }))
    })

    this.socket.on('success', (username, avatar) => {
      this.props.cookies.set('username', username, { path: '/' });
      this.props.cookies.set('avatar', avatar, { path: '/' });
      this.setState(() => ({
        user: {username, avatar}
      }))
    })

    this.socket.on('fail', (email) => {
      console.log('existing email: ', email)
    })

    this.socket.on('roomCreated', (roomID) => {
      this.props.history.push('/room/' + roomID[0].id);
    })
  }

  clearCookie() {
    this.props.cookies.remove('username')
    this.props.cookies.remove('avatar')
    this.setState(() => ({
      user: { username: false, avatar: false }
    }))
  }

  render() {
    return (
      <div className="wrapper">
        <LeftPanel allRooms={this.state.allRooms}/>
        <RightPanel socket={this.socket} topics={this.state.topics} allRooms={this.state.allRooms} user={this.state.user} clearCookie={this.clearCookie} />
      </div>
    );
  }
}

export default withCookies(Home);
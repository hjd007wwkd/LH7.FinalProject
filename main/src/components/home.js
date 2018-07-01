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
      username: false
    }
    this.socket = io('https://ancient-forest-74575.herokuapp.com/');
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

    this.socket.on('success', (username) => {
      this.props.cookies.set('username', username, { path: '/' });
      this.setState(() => ({
        username
      }))
    })

    this.socket.on('fail', (email) => {
      console.log('existing email: ', email)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <LeftPanel allRooms={this.state.allRooms}/>
        <RightPanel socket={this.socket} topics={this.state.topics} allRooms={this.state.allRooms}/>
      </div>
    );
  }
}

export default withCookies(Home);
import React, { Component } from 'react';
import io from 'socket.io-client';
import LeftPanel from './leftpanel'
import RightPanel from './rightpanel'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allRooms: [],
      topics: [],
      featureRooms: []
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
  }

  render() {
    return (
      <div className="wrapper">
        <LeftPanel allRooms={this.state.allRooms}/>
        <RightPanel topics={this.state.topics} allRooms={this.state.allRooms}/>
      </div>
    );
  }
}

export default Home;
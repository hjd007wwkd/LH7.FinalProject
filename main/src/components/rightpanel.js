import React, { Component } from 'react';
import NavBar from './navbar';
import RoomList from './roomlist';

class RightPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // topics should be either an array with just topics and subtopics
      currTopic: 'home',
      currSubtopic: '',
    }
    this.changeTopic = this.changeTopic.bind(this);
    this.changeSubtopic = this.changeSubtopic.bind(this);
  }

  changeTopic(e) {
    e.preventDefault();
    console.log(this.state.currTopic)
    this.setState({
      currTopic: e.target.text,
      currSubtopic: ''
    })
  }
  
  changeSubtopic(e) {
    e.preventDefault();
    this.setState({
      currSubtopic: e.target.text
    })
  }

  render() {
    return (
      <div className="rightpanel">
        <NavBar topics={this.props.topics} changeTopic={this.changeTopic} changeSubtopic={this.changeSubtopic} />
        <RoomList allRooms={this.props.allRooms}/>
      </div>
    );
  }
}

export default RightPanel;
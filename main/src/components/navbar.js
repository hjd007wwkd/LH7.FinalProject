import React, { Component } from 'react';
import Topics from './topics';
import CreateRoom from './create-room';
import Login from './login';
import Register from './register';

class NavBar extends Component {

  getTopics() {
    const topicArray = [];
    this.props.topics.map((data) => {
      if(!topicArray.includes(data.topic)) {
        topicArray.push(data.topic);
      }
    })
    return topicArray;
  }
  
  render() {
    return (
      <div className="pos-f-t navbar-container">

        <Topics 
          topics={this.getTopics()} 
          topicPool={this.props.topics} 
          changeTopic={this.props.changeTopic} 
          changeSubtopic={this.props.changeSubtopic}
        />
        <CreateRoom />
        <Login socket={this.props.socket}/>
        <Register socket={this.props.socket}/>

      </div>
    );
  }
}

export default NavBar;


import React, { Component } from 'react';
import Topics from './topics';

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
      </div>
    );
  }
}

export default NavBar;


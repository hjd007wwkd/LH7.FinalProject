import React, { Component } from 'react';
import SubTopics from './subtopics';

class Topics extends Component {
  
  getSubtopics(topic) {
    const subtopics = [];
    this.props.topicPool.map((data) => {
      if(data.topic === topic) {
        subtopics.push(data.subtopic)
      }
    })
    return subtopics;
  }
  
  renderTopics() {
    return (
      this.props.topics.map((data) => {
        const subtopics = this.getSubtopics(data)
        return (
          <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown" >
              {data}
            </a>
            <SubTopics subtopics={subtopics} changeSubtopic={this.props.changeSubtopic} />
          </li>
        );
      })
    );
  }

  componentDidUpdate() {
    const navButtons = document.getElementsByClassName('dropdown-toggle');
    for(let elem of navButtons) {
      elem.addEventListener('click', this.props.changeTopic)
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <ul className="nav nav-mega">
            <li className="dropdown">
              <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                Home
              </a>
            </li>
            {this.renderTopics()}
            {this.props.username ? 
                <li className="dropdown">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                  Create New Room
                </button>
                </li> : false}
            
            
          </ul>
        </div>
      </div>
    )
  }
}

export default Topics;
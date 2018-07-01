import React, { Component } from 'react';
import Topics from './topics';
import Login from './login';
import Register from './register';
import CreateRoom from './create-room';

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
          user={this.props.user}
        />
        {this.props.user.username ?
          <React.Fragment>
            <CreateRoom topics={this.getTopics()} topicPool={this.props.topics} socket={this.props.socket} username={this.props.user.username} />
            <button onClick={this.props.clearCookie}>Log Out</button> 
          </React.Fragment> :
          <React.Fragment>
            <Login socket={this.props.socket}/> 
            <Register socket={this.props.socket}/>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default NavBar;


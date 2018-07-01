import React, { Component } from 'react';

class MessageList extends Component {

  renderMessages(messages) {
    return messages.length === 0 ? true :
    messages.map((message) => {
      return (
        <div className="message-container">
          <div className="column1"> 
            <img className="miniavatar" src={message.avatar} alt="user" />
          </div>
  
          <div className="column2">
            
            <div className="message-header">
              <span className="username">{message.username}</span>
              <span className="message-time">{message.created_at}</span>
            </div>
  
            <div className="message-message">
              <p>{message.content}</p>
            </div>
  
          </div>
        </div>
      )
    })
  }
  
  componentDidUpdate() {
    const elem = document.getElementById('autoscrolldiv');
    console.log('scrollintoview')
    elem.scrollIntoView();
  }
  
  render() {
    return (
      <div id="message-list">
        {this.renderMessages(this.props.messages)}
        <div id="autoscrolldiv"></div>
      </div>
    );
  }
}

export default MessageList;
import React from 'react';
import MessageList from './message-list';
import ChatBar from './chat-bar';

const Main = (props) => {
  return (
    <div className="main-content">
      <div className="main-topbar">
        <p>Channel Name</p>
      </div>
      <div id="message-area">
        <MessageList messages={props.messages}/>
        <ChatBar handleMessageAdd={props.handleMessageAdd}/>
      </div>
    </div>
  );
}

export default Main;
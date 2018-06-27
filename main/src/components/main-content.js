import React from 'react';
import MessageList from './message-list';
import ChatBar from './chat-bar';

const Main = () => {
  return (
    <div className="main-content">
      <div className="main-topbar">
        <p>Channel Name</p>
      </div>
      <div id="message-area">
        <MessageList />
        <ChatBar />
      </div>
    </div>
  );
}

export default Main;
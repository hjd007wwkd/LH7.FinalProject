import React from 'react';
import NavBar from './navbar';
import MessageList from './message-list';
import ChatBar from './chat-bar';

const Main = () => {
  return (
    <div className="main-content">
      <NavBar />
      <div id="message-area">
        <MessageList />
        <ChatBar />
      </div>
    </div>
  );
}

export default Main;
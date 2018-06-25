import React from 'react';

const ChatBar = () => {
  return (
    <div id="chat-bar">
      <div className="chat-area">
        <textarea rows="1" placeholder="Send a message to [roomname]"></textarea>
      </div>

      <div>
        <p id="message-typing-status">*** <strong>User1</strong> is typing...</p>
      </div>

    </div>
  );
}

export default ChatBar;
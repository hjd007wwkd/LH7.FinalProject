import React from 'react';

const userArray = [
  'Bob', 'James', 'Sarah'
]

// handle SINGLE user, MULTI user, is/are, etc.
const typingStatus = () => {
  const last = userArray.length - 1;
  userArray[last] = '& ' + userArray[last]
  return userArray.join(', ');
}

const ChatBar = () => {
  return (
    <div id="chat-bar">

      <div className="chat-area">
        <textarea rows="1" placeholder="Send a message to [roomname]"></textarea>
      </div>

      <div>
        <p id="message-typing-status">
          <strong>
            <i class="fas fa-ellipsis-h"></i>
             {typingStatus()}
          </strong> is typing...
        </p>
      </div>

    </div>
  );
}

export default ChatBar;
import React from 'react';

function renderMessages(messages) {
  return messages.length === 0 ? true :
  messages.map((message) => {
    return (
      <div className="message-container">
        <div className="column1"> 
          <img className="miniavatar" src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png" alt="user" />
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

const MessageList = (props) => {
  return (
    <div className="message-list">
      {renderMessages(props.messages)}
    </div>
  );
}

export default MessageList;
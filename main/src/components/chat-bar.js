import React from 'react';

// handle SINGLE user, MULTI user, is/are, etc.
const typingStatus = (userArray) => {
  const last = userArray.length - 1;
  userArray[last] = '& ' + userArray[last]
  return userArray.join(', ');
}

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typingTimer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    if (e.key === 'Enter'){
      e.preventDefault();
      let content = e.target.value;
      if(content.trim().length !== 0){
        this.props.handleMessageAdd(content);
      }
      e.target.value = "";
    } else {
      this.props.handleTypingStatus(true);
      clearTimeout(this.state.typingTimer)
      this.state.typingTimer = setTimeout(() => { this.props.handleTypingStatus(false) }, 1000);
    }
  }
  
  render(){
    return (
      <div className="chat-bar">
        <div className="chat-area">
          <textarea rows="1" onKeyPress={this.handleSubmit} placeholder="Send a message to [roomname]"></textarea>
        </div>

        <div>
          <p id="message-typing-status">
            <strong>
              <i class="fas fa-ellipsis-h"></i>
              {typingStatus(['bob','jane','sarah'])}
            </strong> typing...
          </p>
        </div>
      </div>
    );
  }
}

export default ChatBar;
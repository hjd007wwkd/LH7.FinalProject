import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typingTimer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTypingStatus = this.renderTypingStatus.bind(this);
  }

  renderTypingStatus(userArray) {
    const length = userArray.length;
    const last = userArray.length - 1;
    let verb = ' are ';
    console.log(userArray)

    if(!length) {
      return '';
    } else if(length === 1) {
      verb = ' is ';
    } else if (length < 5) {
      userArray[last] = '& ' + userArray[last]
    } else if (length >= 5) {
      userArray.push(' & others ')
    }
    
    return (
      <React.Fragment>
        <i class="fas fa-ellipsis-h"></i> 
        {userArray.join(', ') + verb + 'typing...'}
      </React.Fragment>
    );
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
              {this.renderTypingStatus(this.props.whoIsTyping)}
            </strong> 
          </p>
        </div>
      </div>
    );
  }
}

export default ChatBar;
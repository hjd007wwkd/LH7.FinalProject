import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typingTimer: ''
    };
    this.renderTypingStatus = this.renderTypingStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderTypingStatus(userArray) {
    const length = userArray.length;
    let verb = ' are ';
    
    if(!length) {
      return false;
    } else if(length < 2) {
      verb = ' is ';
    }
    
    const returnString = [userArray.slice(0, -1).join(', '), userArray.slice(-1)[0]]
      .join(userArray.length < 2 ? '' : ' & ') + verb + ' typing...';
    
    return (
      <React.Fragment>
        <i class="fas fa-ellipsis-h"></i>{' '} 
        {returnString}
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
      clearTimeout(this.state.typingTimer);
      this.state.typingTimer = setTimeout(() => { this.props.handleTypingStatus(false) }, 1000);
    }
  }
  
  render(){
    return (
      <div className="chat-bar">
        <div className="chat-area">
          <textarea 
            rows="1" 
            onKeyPress={this.handleSubmit} 
            placeholder="Send a message to the channel...">
          </textarea>
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
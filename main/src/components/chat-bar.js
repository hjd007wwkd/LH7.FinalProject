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

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
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
    }
  }
  
  // <div>
  //   <p id="message-typing-status">
  //     <strong>
  //       <i class="fas fa-ellipsis-h"></i>
  //       {typingStatus()}
  //     </strong> is typing...
  //   </p>
  // </div>
  
  render(){
    return (
      <div className="chat-bar">

        <div className="chat-area">
          <textarea rows="1" onKeyPress={this.handleSubmit} placeholder="Send a message to [roomname]"></textarea>
        </div>


      </div>
    );
  }
}

export default ChatBar;
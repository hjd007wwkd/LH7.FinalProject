import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class MessageList extends Component {

  // renderMessages(messages) {
  //   return messages.length === 0 ? true :
  //   messages.map((message) => {
  //     return (
  //       <div className="message-container">
  //         <div className="column1"> 
  //           <img className="miniavatar" src={message.avatar} alt="user" />
  //         </div>
  
  //         <div className="column2">
            
  //           <div className="message-header">
  //             <span className="username">{message.username}</span>
  //             <span className="message-time">{message.created_at}</span>
  //           </div>
  
  //           <div className="message-message">
  //             <p>{message.content}</p>
  //           </div>
  
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  renderMessages(messages) {
    console.log('ah')
    return messages.length === 0 ? true :
    messages.map((message) => {
      return (
        <ListGroupItem>
          <div className="list-container">
            <img className="miniavatar column1" src={message.avatar} alt="user" />
            <div className="column2">
              <div className="message-header">
                <p class="username">{message.username}</p>
                <p class="time">{message.created_at}</p>
              </div>
              <div className="message-content">
                <p>{message.content}</p>
              </div>
            </div>
          </div>
        </ListGroupItem>
      )
    })
  }
  
  componentDidUpdate() {
    const elem = document.getElementById('autoscrolldiv');
    elem.scrollIntoView();
  }

  
  render() {
    return (
      <div id="message-list">
        <ListGroup>
          {this.renderMessages(this.props.messages)}
        </ListGroup>
        <div id="autoscrolldiv"></div>
      </div>
    );
  }
}

export default MessageList;
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class MessageList extends React.Component {
  transformDate(date) {
    const newDate = new Date(date);
    return newDate.toTimeString().slice(0, 8);
  }

  renderMessages(messages) {
    return messages.length === 0 ? true :
      messages.map((message) => {
        return (
          <ListGroupItem>
            <div className="list-container">
              <img className="miniavatar column1" src={message.avatar} alt="user" />
              <div className="column2">
                <div className="message-header">
                  <p class="username">{message.username}</p>
                  <p class="time">{this.transformDate(message.created_at)}</p>
                </div>
                <div className="message-content">
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          </ListGroupItem>
        );
      });
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
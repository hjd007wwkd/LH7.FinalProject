import React from 'react';
import {Button, Collapse} from 'reactstrap';
import ArticleView from './article-view';
import MessageList from './message-list';
import ChatBar from './chat-bar';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      toggleArticle: false,
      toggleMessageList: false
     };
    this.toggle = this.toggle.bind(this);
  }
  
  toggle(e) {
    const targetID = e.target.id;
    console.log(this.state)
    this.setState({ [targetID]: !this.state[targetID] });
  }



  render() {
    const articleData = this.props.article[0];

    return (
      articleData ? (
      <div className="main-content">
        <div className="main-header">
          <Button id="toggleArticle" color="secondary" onClick={this.toggle}>Article</Button>
          <p>{articleData.title}</p>
          <Button id="toggleMessageList" color="secondary" onClick={this.toggle}>Message</Button>
        </div>

        <div id="main-toggler">
          <Collapse id="article-container" isOpen={this.state.toggleArticle}>
            <ArticleView articleData={articleData} />
          </Collapse>

          <Collapse className="message-container" isOpen={this.state.toggleMessageList}>
            <MessageList messages={this.props.messages}/>
            <ChatBar handleMessageAdd={this.props.handleMessageAdd} handleTypingStatus={this.props.handleTypingStatus} />
          </Collapse>
        </div>
      </div> 
      ) : (
      <div className="main-content">
        <div className="main-header">
          <p>Loading...</p>
        </div>        
      </div> 
      )
    );
  }
}

export default Main;
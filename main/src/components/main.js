import React from 'react';
import {Button, Collapse, Navbar } from 'reactstrap';
import ArticleView from './article-view';
import MessageList from './message-list';
import ChatBar from './chat-bar';
import { PulseLoader } from 'react-spinners';

class Main extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { 
  //     toggleArticle: true,
  //     toggleMessageList: true
  //    };
  //   this.toggle = this.toggle.bind(this);
  // }
  
  // toggle(e) {
  //   const targetID = e.target.id;
  //   console.log(this.state)
  //   this.setState({ [targetID]: !this.state[targetID] });
  // }

  render() {
    const articleData = this.props.article[0];

    return (
      articleData ? (
      <div className="main-content">
        <Navbar color="dark" inverse expand="md">
          <Button id="toggleArticle" color="secondary" onClick={this.props.handleToggle}><i class="far fa-newspaper"></i></Button>
          <div className="title-container"><p>{articleData.title}</p></div>
          <Button id="toggleMessageList" color="secondary" onClick={this.props.handleToggle}><i class="fas fa-comments"></i></Button>
        </Navbar>

        <div id="main-toggler">
          <Collapse id="article-container" isOpen={this.props.isOpen.article}>
            <ArticleView articleData={articleData} />
          </Collapse>

          <Collapse className="message-container" isOpen={this.props.isOpen.message}>
            <MessageList messages={this.props.messages}/>
            <ChatBar whoIsTyping={this.props.whoIsTyping} handleMessageAdd={this.props.handleMessageAdd} handleTypingStatus={this.props.handleTypingStatus} />
          </Collapse>
        </div>
      </div> 
      ) : (
      <div className="main-content">
        <Navbar color="dark" inverse expand="md">
          <div className="title-container"><p><PulseLoader color={'#ffffff'} /></p></div>
        </Navbar>
      </div> 
      )
    );
  }
}

export default Main;
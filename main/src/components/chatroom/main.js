import React from 'react';
import {Button, Collapse, Navbar } from 'reactstrap';
import ArticleView from './article-view';
import MessageList from './message-list';
import ChatBar from './chat-bar';
import { PulseLoader } from 'react-spinners';

const Main = (props) => {
  const articleData = props.article[0];

  return (
    articleData ? (
    <div className="main-content">
      <Navbar color="dark" inverse expand="md">
        <Button id="toggleArticle" color="secondary" onClick={props.handleToggle}>
          <i class="far fa-newspaper"></i>
        </Button>
        <div className="title-container">
          <p>{articleData.title}</p>
        </div>
        <Button id="toggleMessageList" color="secondary" onClick={props.handleToggle}>
          <i class="fas fa-comments"></i>
        </Button>
      </Navbar>

      <div id="main-toggler">
        <Collapse id="article-container" isOpen={props.isOpen.article}>
          <ArticleView articleData={articleData} />
        </Collapse>

        <Collapse className="message-container" isOpen={props.isOpen.message}>
          <MessageList messages={props.messages}/>
          <ChatBar whoIsTyping={props.whoIsTyping} handleMessageAdd={props.handleMessageAdd} handleTypingStatus={props.handleTypingStatus} />
        </Collapse>
      </div>
    </div> 
    ) : (
    <div className="main-content">
      <Navbar color="dark" inverse expand="md">
        <div className="title-container">
          <p><PulseLoader color={'#76b852'} /></p>
        </div>
      </Navbar>
    </div> 
    )
  );
}

export default Main;
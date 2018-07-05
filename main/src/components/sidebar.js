import React from 'react';
import { Button, ListGroup, ListGroupItem, Navbar, NavbarBrand } from 'reactstrap';

const renderUser = (peerInfo, handleLikeToggle, currUser) => {
  return (
    <ListGroupItem>
      <div className="list-container">
        <img className="miniavatar column1" src={peerInfo.avatar} alt="user" />
        <div className="column2">
          <p>{peerInfo.username}</p>
          <p><div className="status-light"></div>online</p>
        </div>
        <div className="column3">
          <span>{peerInfo.like}</span>
          <Button onClick={() => {handleLikeToggle(peerInfo.username)}}>
            <i class={peerInfo.userList.includes(currUser) ? "fas fa-thumbs-up liked" : "fas fa-thumbs-up"}></i>
          </Button>
        </div>
      </div>
    </ListGroupItem>
  )
}

const renderUsernames = (peers, handleLikeToggle, currUser) => {
  const users = [];
  for (var username in peers) {
    users.push(renderUser(peers[username], handleLikeToggle, currUser))
  }
  return users
}

const SideBar = ({ user, peers, handleLikeToggle, like }) => {
  return (
    <div className="sidebar">

      <Navbar color="dark" inverse expand="md">
        <NavbarBrand href="/">NEWSWATCH</NavbarBrand>
      </Navbar>

      <div className="user-list">
        <ListGroup>
          {renderUsernames(peers, handleLikeToggle, user.username)}
        </ListGroup>
      </div>

      <ListGroupItem id="current-user-container">
        <div className="list-container">
          <img className="miniavatar column1" src={user.avatar} alt="user" />
          <div className="column2">
            <p>{user.username}</p>
            <p><div className="status-light"></div>online</p>
          </div>
          <div className="column3">
            <span>{like}</span>
            <i class="fas fa-thumbs-up"></i>
          </div>
        </div>
      </ListGroupItem>

    </div>
  );
}

export default SideBar;
import React from 'react';
import { Button, ListGroup, ListGroupItem, Navbar, NavbarBrand } from 'reactstrap';

const renderUser = (user, handleLikeToggle) => {
  return (
    <ListGroupItem>
      <div className="list-container">
        <img className="miniavatar column1" src={user.avatar} alt="user" />
        <div className="column2">
          <p>{user.username}</p>
          <p><div className="status-light"></div>online</p>
        </div>
        <div className="column3">
          <span>{user.like}</span>
          <Button onClick={() => {handleLikeToggle(user.username)}}>
            <i class="fas fa-thumbs-up"></i>
          </Button>
        </div>
      </div>
    </ListGroupItem>
  )
}

const renderUsernames = (userList, handleLikeToggle) => {
  const users = [];
  for (var username in userList) {
    users.push(renderUser(userList[username], handleLikeToggle))
  }
  return users
}

const SideBar = ({ user, userList, handleLikeToggle, like }) => {
  return (
    <div className="sidebar">

      <Navbar color="dark" inverse expand="md">
        <NavbarBrand href="/">NEWSWATCH</NavbarBrand>
      </Navbar>

      <div className="user-list">
        <ListGroup>
          {renderUsernames(userList, handleLikeToggle)}
        </ListGroup>
      </div>

      <ListGroupItem id="current-user-container">
        <div className="list-container">
          <img className="miniavatar column1" src={user.avatar} alt="user" />
          <div className="column2">
            <p>{user.username}</p>
            <p><div className="status-light"></div>online</p>
            <span>{like}</span>
            <i class="fas fa-thumbs-up"></i>
          </div>

        </div>
      </ListGroupItem>

    </div>
  );
}

export default SideBar;
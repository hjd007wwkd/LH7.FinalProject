import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const renderUser = (user) => {
  return (
    <ListGroupItem>
      <div className="list-container">
        <img className="miniavatar column1" src={user.avatar} alt="user" />
        <div className="column2">
          <p>{user.username}</p>
          <p><div className="status-light"></div>online</p>
        </div>
      </div>
    </ListGroupItem>
  )
}

const renderUsernames = (userList) => {
  const users = [];
  for (var username in userList) {
    users.push(renderUser(userList[username]))
  }
  return users
}

const SideBar = ({ user, userList }) => {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <div className="mini-logo">
        <p><i class="fas fa-archway"></i>  NewsWatch</p>
        </div>
      </div>

      <div className="user-list">
        <ListGroup>
          {renderUsernames(userList)}
        </ListGroup>
      </div>

      <ListGroupItem id="current-user-container">
        <div className="list-container">
          <img className="miniavatar column1" src={user.avatar} alt="user" />
          <div className="column2">
            <p>{user.username}</p>
            <p><div className="status-light"></div>online</p>
          </div>
        </div>
      </ListGroupItem>

    </div>
  );
}

export default SideBar;
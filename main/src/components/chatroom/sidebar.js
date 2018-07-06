import React from 'react';
import UserList from './user-list'
import { ListGroupItem, Navbar, NavbarBrand } from 'reactstrap';

const SideBar = ({ user, peers, handleLikeToggle, like }) => {
  return (
    <div className="sidebar">
      <Navbar color="dark" inverse expand="md">
        <NavbarBrand href="/">NEWSWATCH</NavbarBrand>
      </Navbar>
      <div className="user-list">
        <UserList peers={peers} handleLikeToggle={handleLikeToggle} username={user.username} />
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
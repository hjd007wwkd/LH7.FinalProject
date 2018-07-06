import React from 'react';
import { Button, ListGroup, ListGroupItem, Navbar, NavbarBrand } from 'reactstrap';

const User = ({ peerInfo, handleLikeToggle, currUser }) => {
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

export default User;
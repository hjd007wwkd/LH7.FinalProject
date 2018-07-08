import React from 'react';
import User from './user';
import { ListGroup } from 'reactstrap';

const UserList = ({ peers, handleLikeToggle, currUser }) => {
  const users = [];
  for (let username in peers) {
    users.push(
      <User peerInfo={peers[username]} handleLikeToggle={handleLikeToggle} currUser={currUser} />
    );
  }

  users.sort((a, b) => {
    return b.props.peerInfo.like - a.props.peerInfo.like
  })

  return (
    <ListGroup>
      {users}
    </ListGroup>
  );
}

export default UserList;
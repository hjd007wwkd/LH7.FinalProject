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

  return (
    <ListGroup>
      {users}
    </ListGroup>
  );
}

export default UserList;
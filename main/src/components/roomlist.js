import React from 'react';
import Room from './room';

const RoomList = ({ roomArray }) => {
  return (
    <div className="roomlist-container">
      <div className="roomlist">
        {roomArray.map((roomData) => <Room data={roomData} inCarousel={false} /> )}
      </div>
    </div>
  );
}

export default RoomList;

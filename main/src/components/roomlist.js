import React from 'react';
import Room from './room';

const RoomList = (props) => {

  return (
    <div className="roomlist-container">
      <div className="roomlist">
        {props.allRooms.map((data) => <Room data={data} inCarousel={false} /> )}
      </div>
    </div>
  );
}

export default RoomList;
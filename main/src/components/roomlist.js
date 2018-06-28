import React from 'react';

const roomArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 
  1, 2, 3, 4, 5, 6, 7, 8, 
  1, 2, 3, 4, 5, 6, 7, 8, 
  1, 2, 3, 4, 5, 6, 7, 8, 
  1, 2, 3, 4, 5, 6, 7, 8, 
];

const RoomList = () => {
  
  const renderRoomList = () => {
    console.log(roomArray.length)
    return (
      roomArray.map((data) => {
        console.log('uhm')
        return (
          <div class="room-container">
            <img class="room" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
          </div>
        );
      })
    );
  }
  
  return (
    <div className="roomlist-container">
      <div className="roomlist">
        {renderRoomList()}
      </div>
    </div>
  );
}

export default RoomList;
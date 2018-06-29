import React from 'react';

const Room = ({ data }) => {
  const roomLink = '/room/' + data.roomID

  return (
    <div className="room-container">

      <a href={roomLink}>
        <img className="room" src={data.roomImage} alt="First slide"/>
      </a>

      <div className="user-container">

        <div className="column1">
          <img className="miniavatar" src={data.owner.avatar} alt="userrow" />
        </div>

        <div className="column2">
          <div>
            <p>{data.owner.username}</p>
            <p>{data.usersOnline} users online</p>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Room;
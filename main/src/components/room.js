import React from 'react';

const Room = ({ data, inCarousel }) => {
  const roomLink = '/room/' + data.roomID

  return (
    <div className="room-container">

      <a href={roomLink}>
        <img className={"room " + (inCarousel ? "carousel-video" : "roomlist-video")} src={data.roomImage} alt="First slide"/>
      </a>

      <div className="user-container">

        <div className="column1">
          <img className="miniavatar" src={data.owner.avatar} alt="userrow" />
        </div>

        <div className="column2">
            <p >{data.roomName}</p>
            <p>{data.owner.username}</p>
        </div>

        <div className="column3">
          <p>{data.usersOnline} users online</p>
        </div>

      </div>
    </div>
  )

}

export default Room;
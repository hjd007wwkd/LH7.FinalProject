import React from 'react';

const RoomList = () => {

  const renderRoomList = () => {
    return (
      roomArray.map((data) => {
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
            
              <div className="column3"></div>
            </div>
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



const roomArray = [
  {
    roomID: 1,
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 2,
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 3,
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 4,
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 5,
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 6,
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 7,
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 8,
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 9,
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 10,
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 11,
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 12,
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 13,
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 14,
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 15,
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 16,
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  }
];
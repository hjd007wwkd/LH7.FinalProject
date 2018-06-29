import React from 'react';
import Room from './room';

const RoomList = () => {

  return (
    <div className="roomlist-container">
      <div className="roomlist">
        {roomArray.map((data) => <Room data={data} /> )}
      </div>
    </div>
  );
}

export default RoomList;



const roomArray = [
  {
    roomID: 1,
    roomName: 'Sports Central',
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 2,
    roomName: 'Politics Now',
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 3,
    roomName: 'eSports eSports',
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 4,
    roomName: 'FoodCentral',
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 5,
    roomName: 'Gordon Ramsay',
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 6,
    roomName: 'The Young Turks',
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 7,
    roomName: 'Russia Today',
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 8,
    roomName: 'Hot Wings',
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 9,
    roomName: 'Starcraft Player',
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
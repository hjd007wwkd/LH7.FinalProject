import React from 'react';
import Room from './room';

const RoomList = () => {

  return (
    <div className="roomlist-container">
      <div className="roomlist">
        {roomArray.map((data) => <Room data={data} inCarousel={false} /> )}
      </div>
    </div>
  );
}

export default RoomList;

const roomArray = [
  {
    roomID: 1,
    roomName: 'Sports Central',
    topic: 'Tech',
    subtopic: 'Big Data',
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
    topic: 'Tech',
    subtopic: 'Big Data',
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
    topic: 'Tech',
    subtopic: 'Gadgets',
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
    topic: 'Tech',
    subtopic: 'Big 5',
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
    topic: 'Tech',
    subtopic: 'Big Data',
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
    topic: 'Sports',
    subtopic: 'NBA',
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
    topic: 'Sports',
    subtopic: 'NBA',
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
    topic: 'Sports',
    subtopic: 'NFL',
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
    topic: 'Sports',
    subtopic: 'NFL',
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 10,
    roomName: 'Global News',
    topic: 'Sports',
    subtopic: 'NHL',
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 11,
    roomName: 'Global News',
    topic: 'Finance',
    subtopic: 'Stocks',
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 12,
    roomName: 'Global News',
    topic: 'Finance',
    subtopic: 'Stocks',
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 13,
    roomName: 'Global News',
    topic: 'Finance',
    subtopic: 'Rates & Bonds',
    owner: {
      username: 'Bob3452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg',
    usersOnline: 10
  },
  {
    roomID: 14,
    roomName: 'Global News',
    topic: 'Finance',
    subtopic: 'Currencies',
    owner: {
      username: 'Karl4563452',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg',
    usersOnline: 134
  },
  {
    roomID: 15,
    roomName: 'International News',
    topic: 'Politics',
    subtopic: 'International',
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 16,
    roomName: 'US News',
    topic: 'Politics',
    subtopic: 'US',
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  },
  {
    roomID: 17,
    roomName: 'China News',
    topic: 'Politics',
    subtopic: 'China',
    owner: {
      username: 'Sarah45345',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO',
    usersOnline: 304
  },
  {
    roomID: 18,
    roomName: 'Europe News',
    topic: 'Politics',
    subtopic: 'Europe',
    owner: {
      username: 'Jrodan111',
      avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'
    },
    roomImage: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg',
    usersOnline: 3
  }
];
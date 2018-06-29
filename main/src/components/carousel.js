import React from 'react';
import Room from './room';

const Carousel = () => {
  
  const renderCarouselColumn = (n) => {
    const start = n * 3;
    const end = start + 3;
    const isActive = !n;
    const carouselColumnArray = [];
    
    for(let i = start; i < end; i ++) {
      carouselColumnArray.push(
        <Room data={featuredArray[i]} />
      )
    }
    
    return (
      <div className={"carousel-item " + (isActive ? "active" : "")}>
        <div className="carousel-item-container">
        {carouselColumnArray}
        </div>
      </div>
    )
  }

  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        {[0, 1, 2].map((n) => renderCarouselColumn(n) )}
      </div>

      <a class="carousel-control carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;

  {/* <div class="carousel-item">
    <div class="carousel-item-container">
      <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Second slide"/>
      <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
      <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
    </div>
  </div>
  
  <div class="carousel-item">
    <div class="carousel-item-container">
      <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="First slide"/>
      <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Third slide"/>
      <img class="d-block w-100 carousel-video" src="https://i.imgur.com/7ipEuOI.jpg" alt="Second slide"/>
    </div>
  </div> */}

const featuredArray = [
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
  }
];
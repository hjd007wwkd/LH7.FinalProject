import React from 'react';

const Carousel = () => {
  const three = [0, 1, 2];
  
  const renderCarouselColumn = (n) => {
    return (
      featuredArray.map((data, index) => {
        if(index )
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
        );
      })
    );
  }

  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        {three.map((n) => {
        <div class="carousel-item active">
          <div class="carousel-item-container">
            
          </div>
        </div>
        })}
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
  }
];
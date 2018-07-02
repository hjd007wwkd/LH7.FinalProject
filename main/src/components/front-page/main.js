import React from 'react';
import CreateRoomModal from './create-room';
import SearchResults from './search-results';
import SearchOptions from './search-options';
import { Button } from 'reactstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentPage: 1,
      roomsPerPage: 10
    }

    this.createRoom = this.createRoom.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  toggle() {
    this.setState(() => ({
      isOpen: !this.state.isOpen
    }))
  }

  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }




  filterRooms(query) {
    const allRooms = this.props.allRooms;
    let filtered = [];
    
    if(query.startsWith('http')) {
      filtered = allRooms.filter((room) => {
        return room.url.includes(query);
      })
      return filtered;
    } else {
      const lowQuery = query.toLowerCase()
      const roomArray = allRooms.filter((room) => {
        return (
          room.title.toLowerCase().includes(lowQuery) ||
          room.site.toLowerCase().includes(lowQuery) ||
          room.tags.filter((tag) => { 
            return tag.toLowerCase().includes(lowQuery)
          }).length
        )
      })
      return roomArray || [];
    }
  }

  createRoom(e) {
    e.preventDefault()
    const diffBotKey = process.env.DIFFBOT_KEY;
    const articleURL = encodeURIComponent(e.target.articleURL.value);
    let requestURL = 'https://api.diffbot.com/v3/article?token=' + diffBotKey + '&url=' + articleURL;
    
    fetch(requestURL)
    .then(result => {
      return result.json();
    }).then(data => {
      const title = data.objects[0].title
      const image = data.objects[0].images[0].url || 'http://www.saesteel.com/wp-content/uploads/2016/12/Marketplace-Lending-News.jpg'
      const url = data.objects[0].pageUrl
      const site = data.objects[0].siteName
      const date = data.objects[0].date
      const tags = data.objects[0].tags.map((item) => (
        item.label
      )) || [];
      const contenthtml = data.objects[0].html
      const contenttext = data.objects[0].text
      const username = 'Bob3452'
      if(date )
      if(title && image && url && site && date && tags && contenthtml && contenttext && username) {
        this.props.socket.emit('createRoom', title, image, url, site, date, tags, contenthtml, contenttext, username)
        this.props.socket.on('roomCreated', (roomID) => {
          this.props.history.push('/room/' + roomID[0].id);
          this.toggle()
        })
      } else {
        console.log('invalid information')
      }
    }).catch(function(err) {
      console.log("fetch error:");
      console.log(err);
    });
  }

  render() {
    const query = this.props.searchQuery;
    let roomArray;
    query ? roomArray = this.filterRooms(query) : roomArray = this.props.allRooms;

    const last = this.state.currentPage * this.state.roomsPerPage;
    const first = last - this.state.roomsPerPage;
    const roomsToRender = roomArray.slice(first, last);
    const pages = Math.ceil(roomArray.length / this.state.roomsPerPage);

    return (
      <div id="main">
        <SearchOptions results={roomArray.length} data={{first: first+1, last: first+roomsToRender.length}} />
        <SearchResults roomArray={roomsToRender} pages={pages} handleClick={this.handleClick} />
        {(roomArray.length === 0 && this.props.user.username) ? <Button color="secondary" onClick={this.toggle}>Create Room</Button> : void 0 }
        <CreateRoomModal toggle={this.toggle} createRoom={this.createRoom} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Main;
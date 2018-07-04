import React from 'react';
import CreateRoomModal from './create-room';
import SearchResults from './search-results';
import SearchOptions from './search-options';
import { Button, Jumbotron, ListGroupItem } from 'reactstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      apiLoading: false,
      apiTimer: '',
      currentPage: 1,
      roomsPerPage: 10
    }

    this.createRoom = this.createRoom.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  toggle() {
    this.setState(() => ({
      toggleModal: !this.state.toggleModal
    }))
  }

  toggleLoading() {
    this.setState(() => ({
      apiLoading: !this.state.apiLoading
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
    
    this.toggleLoading()
    this.state.apiTimer = setTimeout(() => {
      console.log('API failed')
      this.toggleLoading()
      // flash error
    }, 5000);
    
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
      const username = this.props.user.username
      
      if(title && image && url && site && date && tags && contenthtml && contenttext && username) {
        this.props.socket.emit('createRoom', title, image, url, site, date, tags, contenthtml, contenttext, username)
        this.props.socket.on('roomCreated', (roomID) => {
          this.props.history.push('/room/' + roomID[0].id);
        })
      } else {
        // flash error
        clearTimeout(this.state.apiTimer)
        this.toggleLoading()
        console.log('invalid information')
      }
    }).catch((err) => {
      // flash error
      clearTimeout(this.state.apiTimer)
      this.toggleLoading()
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
        <SearchResults roomArray={roomsToRender} pages={pages} handleClick={this.handleClick} />
        {(roomArray.length === 0 && query) ? (
          <Jumbotron>
            <ListGroupItem>
              <i class="fas fa-question"></i>
              <div className="column2">
                <div>
                  <h2>No results found...</h2>
                  {this.props.user.username ? (
                  <React.Fragment>
                    <p>Do you want to create a new room?</p>
                    <Button color="secondary" onClick={this.toggle}>Create New Room</Button> 
                  </React.Fragment>
                  ) : false }
                </div>
              </div>
            </ListGroupItem>
          </Jumbotron>
          ) : false }
        <CreateRoomModal toggle={this.toggle} createRoom={this.createRoom} isOpen={this.state.toggleModal} isLoading={this.state.apiLoading} />
      </div>
    );
  }
}

export default Main;
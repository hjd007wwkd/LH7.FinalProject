import React from 'react';
import CreateRoomModal from './create-room';
import SearchResults from './search-results';
import SearchOptions from './search-options';
import { Button } from 'reactstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.createRoom = this.createRoom.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(() => ({
      isOpen: !this.state.isOpen
    }))
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
      ))
      const contenthtml = data.objects[0].html
      const contenttext = data.objects[0].text
      const username = 'Bob3452'
      title && image && url && site && date && tags && contenthtml && contenttext && username ? 
      this.props.socket.emit('createRoom', title, image, url, site, date, tags, contenthtml, contenttext, username) :
      console.log('invalid information')
    }).catch(function() {
      console.log("this is not a valid url");
    });

    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <SearchOptions results="6"/>
        <SearchResults />
        <Button color="primary" onClick={this.toggle}>Create Room</Button>
        <CreateRoomModal 
          toggle={this.toggle} 
          createRoom={this.createRoom}
          isOpen={this.state.isOpen} 
          />
      </div>
    );
  }
}

export default Main;
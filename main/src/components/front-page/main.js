import React from 'react';
import CreateRoomModal from './create-room';
import SearchResults from './search-results2';
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
    console.log(e.target.articleURL.value)
    console.log(process.env.DIFFBOT_KEY)
    const diffBotKey = process.env.DIFFBOT_KEY;
    const articleURL = encodeURIComponent(e.target.articleURL.value);
    let requestURL = 'https://api.diffbot.com/v3/article?token=' + diffBotKey + '&url=' + articleURL;
    // fetch
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
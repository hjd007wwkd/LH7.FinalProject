import React from 'react';
import CreateRoomModal from './create-room';
import { Button } from 'reactstrap';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
        <Button color="primary" onClick={this.toggle}>Create Room</Button>
        <CreateRoomModal 
          toggle={this.toggle} 
          createRoom={this.createRoom} 
          isOpen={this.state.modal} 
          />
      </div>
    );
  }
}

export default SearchResults;
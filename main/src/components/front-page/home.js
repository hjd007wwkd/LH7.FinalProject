import React from 'react';
import io from 'socket.io-client';
import NavBar from './navbar';
import Main from './main';
import { withCookies } from 'react-cookie';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      allRooms: [],
      user: {
        username: props.cookies.get('username') || false,
        avatar: props.cookies.get('avatar') || false
      }
    };
    this.socket = io('https://ancient-forest-74575.herokuapp.com/');
    this.searchDatabase = this.searchDatabase.bind(this);
    this.clearCookie = this.clearCookie.bind(this);
  }
  
  searchDatabase(e) {
    this.setState({
      searchQuery: e.target.value.trim()
    })
  }

  clearCookie() {
    this.props.cookies.remove('username')
    this.props.cookies.remove('avatar')
    this.setState(() => ({
      user: { username: false, avatar: false }
    }))
  }

  componentDidMount() {
    this.socket.on('getRooms', (data) => {
      console.log(data)
      this.setState(() => ({
        allRooms: data
      }))
    })


    this.socket.on('success', (username, avatar) => {
      this.props.cookies.set('username', username, { path: '/' });
      this.props.cookies.set('avatar', avatar, { path: '/' });
      this.setState(() => ({
        user: {username, avatar}
      }))
    })

    this.socket.on('fail', (email) => {
      console.log('existing email: ', email)
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          socket={this.socket}
          user={this.state.user}
          handleSearch={this.searchDatabase}
          clearCookie={this.clearCookie} 
          />
        <Main 
          socket={this.socket} 
          user={this.state.user} 
          allRooms={this.state.allRooms}
          searchQuery={this.state.searchQuery} 
          history={this.props.history}
          />
      </React.Fragment>
    );
  }
}

export default withCookies(Home);
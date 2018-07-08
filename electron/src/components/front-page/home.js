import React from 'react';
import io from 'socket.io-client';
import NavBar from './navbar';
import Main from './main';
import Dashboard from './dashboard';
import { withAlert } from 'react-alert';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: localStorage.getItem('username') || false,
        avatar: localStorage.getItem('avatar') || false
      },
      searchQuery: '',
      allRooms: [],
      dashboard: true
    };
    this.socket = io('https://ancient-forest-74575.herokuapp.com/');
    this.searchDatabase = this.searchDatabase.bind(this);
    this.clearCookie = this.clearCookie.bind(this);
    this.handleDashboard = this.handleDashboard.bind(this);
  }

  componentDidMount() {
    this.socket.on('getRooms', (data) => {
      this.setState(() => ({
        allRooms: [...data].sort((a, b) => (
          new Date(b.date) - new Date(a.date)
        ))
      }));
    })

    this.socket.on('success', (username, avatar) => {
      this.props.alert.success('Logged in', { timeout: 1000 })
      localStorage.setItem('username', username);
      localStorage.setItem('avatar', avatar);
      this.setState(() => ({
        user: {username, avatar}
      }));
    })

    this.socket.on('fail', (msg) => {
      this.props.alert.error(msg, { timeout: 4000 })
    });
  }
  
  searchDatabase(e) {
    this.setState({
      searchQuery: e.target.value.trim()
    });
  }

  clearCookie() {
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
    this.setState(() => ({
      user: { username: false, avatar: false }
    }));
  }

  handleDashboard(searchQuery) {
    this.setState(() => ({
      dashboard: false, searchQuery
    }));
  }

  render() {
    return (
      this.state.dashboard ? <Dashboard handleDashboard={this.handleDashboard}/> :
      <React.Fragment>
        <NavBar 
          socket={this.socket}
          user={this.state.user}
          handleSearch={this.searchDatabase}
          clearCookie={this.clearCookie}
          searchQuery={this.state.searchQuery}
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

export default withAlert(Home);
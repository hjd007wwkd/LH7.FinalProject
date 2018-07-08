import React from 'react';
import Login from './login';
import Register from './register';
import { Input, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginOpen: false,
      registerOpen: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }

  toggleLogin(e) {
    e.preventDefault();
    this.setState({
      loginOpen: !this.state.loginOpen
    });
  }

  toggleRegister(e) {
    e.preventDefault();
    this.setState({
      registerOpen: !this.state.registerOpen
    });
  }

  render() {
    return (
      <div className="nav-container">
        <Navbar color="dark" inverse expand="md">
          <NavbarBrand href="#/"><span className='capital_title'>N</span>ews<span className='capital_title'>W</span>atch</NavbarBrand>
          <Input 
            placeholder="Search..." 
            name="searchbar" 
            value={this.props.searchQuery} 
            onChange={this.props.handleSearch} 
            style={{width: '600px' }}
            autofocus
            />
          <Nav className="ml-auto" navbar>
            {!this.props.user.username ?
            <React.Fragment>
              <NavItem>
                <NavLink onClick={this.toggleLogin}>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggleRegister}>Register</NavLink>
              </NavItem>
            </React.Fragment> :
            <React.Fragment>
              <NavItem>
                <NavLink>{this.props.user.username}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.props.clearCookie}>Logout</NavLink>
              </NavItem>
            </React.Fragment>}
          </Nav>
        </Navbar>
        <Login 
          socket={this.props.socket} 
          isOpen={this.state.loginOpen} 
          toggle={this.toggleLogin} 
          />
        <Register 
          socket={this.props.socket} 
          isOpen={this.state.registerOpen} 
          toggle={this.toggleRegister} 
          />
      </div>
    );
  }
}
import React from 'react';
import Login from './login';
import Register from './register';

import {
  Input,
  InputGroup,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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

          <NavbarBrand href="/">NEWSWATCH</NavbarBrand>
          <Input placeholder="Search..." name="searchbar" style={{width: '600px' }} onChange={this.props.handleSearch} />

          <Nav className="ml-auto" navbar>
            {!this.props.user.username ?
              <React.Fragment>
                <NavItem>
                  <NavLink onClick={this.toggleLogin} >Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.toggleRegister} >Register</NavLink>
                </NavItem>
              </React.Fragment> :
              
              <React.Fragment>
                <NavItem>
                  <NavLink>{this.props.user.username}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.props.clearCookie} >Logout</NavLink>
                </NavItem>
              </React.Fragment>
            }
          </Nav>

        </Navbar>
        <Login socket={this.props.socket} isOpen={this.state.loginOpen} toggle={this.toggleLogin} />
        <Register socket={this.props.socket} isOpen={this.state.registerOpen} toggle={this.toggleRegister} />
      </div>
    );
  }
}
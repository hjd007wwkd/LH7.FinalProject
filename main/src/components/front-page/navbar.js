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
      <div>
        <Navbar color="light" light expand="md">

          <NavbarBrand href="/">REDDIT NEWS</NavbarBrand>
          <Input placeholder="username" style={{width: '300px' }}/>

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
                  <NavLink><img className='user_avatar' src={this.props.user.avatar}/>{this.props.user.username}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.props.clearCookie} >Logout</NavLink>
                </NavItem>
              </React.Fragment>
            }

            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>

          </Nav>

        </Navbar>
        <Login socket={this.props.socket} isOpen={this.state.loginOpen} toggle={this.toggleLogin} />
        <Register socket={this.props.socket} isOpen={this.state.registerOpen} toggle={this.toggleRegister} />
      </div>
    );
  }
}
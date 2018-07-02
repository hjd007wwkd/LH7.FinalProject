import React from 'react';
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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">

          <NavbarBrand href="/">REDDIT NEWS</NavbarBrand>
          <Input placeholder="username" style={{width: '300px' }}/>

          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink href="/">Components</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>

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
      </div>
    );
  }
}
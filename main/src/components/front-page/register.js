import React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if(username.length > 0 && email.length > 0 && password.length > 0) {
      this.props.socket.emit('register', username, email, password)
      this.props.toggle(e);
    }
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader>Modal title</ModalHeader>
          
          <Form onSubmit={this.handleSubmit} >
            <ModalBody>
                <Label for="username">Username:</Label>
                <Input type="text" name="username" placeholder="Username" />
                <Label for="email">Email:</Label>
                <Input type="text" name="email" placeholder="Email" />
                <Label for="password">Password:</Label>
                <Input type="password" name="password" placeholder="Password" />
            </ModalBody>
            <ModalFooter>
              <Button type="submit">Register</Button>
            </ModalFooter>
          </Form>

        </Modal>
      </div>
    );
  }
}

export default Register;
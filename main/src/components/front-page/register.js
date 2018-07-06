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
      this.props.socket.emit('register', username, email, password);
      this.props.toggle(e);
    }
    e.target.username.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={`${this.props.className} register`}>
          <Form onSubmit={this.handleSubmit} >
            <ModalBody>
              <Input type="text" name="username" placeholder="Username" />
              <Input type="text" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />
              <Button type="submit">Register</Button>
            </ModalBody>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Register;
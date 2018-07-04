import React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if(email.length > 0 && password.length > 0) {
      this.props.socket.emit('login', email, password)
      this.props.toggle(e);
    }
    e.target.email.value = "";
    e.target.password.value = "";
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={`${this.props.className} login`}>
          <Form onSubmit={this.handleSubmit} >
            <ModalBody>
                <Input type="text" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
                <Button type="submit">Login</Button>
            </ModalBody>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Login;
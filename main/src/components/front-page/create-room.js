import React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PulseLoader } from 'react-spinners';

class CreateRoomModal extends React.Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader>Modal title</ModalHeader>
          
          <Form onSubmit={this.props.createRoom} >
            <ModalBody>
                <Label for="articleURL">Article URL:</Label>
                <Input type="text" name="articleURL" id="articleURL" placeholder="https://" />
            </ModalBody>
            {this.props.isLoading ? (
            <ModalFooter>
              <PulseLoader color={'#76b852'} />
            </ModalFooter>
            ) : (
            <ModalFooter>
              <Button type="submit">Submit</Button>
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
            )}
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CreateRoomModal;
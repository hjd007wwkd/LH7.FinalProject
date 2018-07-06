import React from 'react';
import { Button, Form, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PulseLoader } from 'react-spinners';

const CreateRoomModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} className={`${props.className} create_room`}>
        <Form onSubmit={props.createRoom} >
          <ModalHeader>Create Room</ModalHeader>
          <ModalBody>
              <Input type="text" name="articleURL" id="articleURL" placeholder="https://" />
          </ModalBody>
          {props.isLoading ? (
          <ModalFooter>
            <PulseLoader color={'#76b852'} />
          </ModalFooter>
          ) : (
          <ModalFooter>
            <Button type="submit">Submit</Button>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
          )}
        </Form>
      </Modal>
    </div>
  );
}

export default CreateRoomModal;
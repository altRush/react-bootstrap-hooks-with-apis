import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalWindow = props => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.modal[0]}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modal[1]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Email: {props.modal[2]}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;

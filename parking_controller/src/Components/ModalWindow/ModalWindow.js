import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import classes from './ModalWindow.module.css';

const ModalWindow = ({ children, heading, openButtonTitle }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={classes.button} variant="primary" onClick={handleShow}>
        {openButtonTitle}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWindow;
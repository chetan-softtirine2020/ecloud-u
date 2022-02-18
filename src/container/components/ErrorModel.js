import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const ErrorModel = (props) => {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);  
  console.log("Errirs" + props.errors);
  console.log("ahow" + show);
   console.log(props.show)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Errors</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>       
      </Modal.Footer>
    </Modal>
  );
};
export default ErrorModel;

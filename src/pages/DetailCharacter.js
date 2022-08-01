import { Modal, show, Button } from "react-bootstrap";
import React, { useState } from "react";

const DetailCharacter = ({ name, status, image, gender }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="card text-center bg-secondary mb-3">
        <img className="img card-img-top" src={image} />
        <div className="card-body">
          <h5>{name}</h5>
          <button type="button" className="btndetail btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <Modal className="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h3>{name}</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="card-img-top" style={{ width: "14rem" }} src={image} />
              <h4>Gender: {gender}</h4>
              <h4>Status: {status}</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DetailCharacter;

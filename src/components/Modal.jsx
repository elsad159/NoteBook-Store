import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const PopUp = ({ handleClose, show }) => {
  return (
    <Modal className="w-100" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yeni</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-between">
        <div className="leftInputs col-6 mx-auto">
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Kategoria:</label>
            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Ad:</label>
            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Qiymet:</label>
            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Tesvir:</label>
            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Yeni:</label>

            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Shekil:</label>

            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="rightInputs col-6 mx-auto">
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Emeli Yaddash(GB):</label>
            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Merkezi processor:</label>

            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Daimi yaddash:</label>

            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Daimi yaddash tipi:</label>

            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Videokart:</label>
            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Emeliyat sistemi:</label>

            <Form.Control
              className="w-100 rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;

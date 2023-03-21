import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function StaticExample({ handleClose, show, showDetails }) {
  return (
    <Modal show={show}>
      <Modal.Header className="d-flex flex-column">
        <Modal.Title>Koputer haqqinda etrafli melumat</Modal.Title>
        <img
          src={showDetails.shekil}
          alt={showDetails.category}
          width={120}
          height={120}
        />
      </Modal.Header>
      <Modal.Body>
        <p>Ad: {showDetails.nouteName}</p>
        <p>Tesvir: {showDetails.tesvir}</p>
        <p>Qiymet: {showDetails.price} AZN</p>
        <p>Emeli Yaddash: {showDetails.emeliYaddash}</p>
        <p>Daimi Yaddash: {showDetails.daimiYaddash}</p>
        <p>Videocard : {showDetails.videoCard}</p>
        <p>CPU : {showDetails.merkeziProcessor}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StaticExample;

import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const PopUp = ({ handleClose, show }) => {
  const category = useRef();
  const nouteName = useRef();
  const price = useRef();
  const tesvir = useRef();
  const yeni = useRef();
  const shekil = useRef();
  const emeliYaddash = useRef();
  const merkeziProcessor = useRef();
  const daimiYaddash = useRef();
  const daimiYaddashTipi = useRef();
  const videoCard = useRef();
  const emeliyatSistemi = useRef();

  const navigate = useNavigate();

  const [notebooks, setNoutebooks] = useState(
    JSON.parse(localStorage.getItem("notebooks"))
      ? JSON.parse(localStorage.getItem("notebooks"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("notebooks", JSON.stringify(notebooks));
  }, [notebooks]);

  const addProducts = () => {
    const newProduct = {
      category: category.current.value,
      nouteName: nouteName.current.value,
      price: price.current.value,
      tesvir: tesvir.current.value,
      yeni: yeni.current.value,
      shekil: shekil.current.value,
      emeliYaddash: emeliYaddash.current.value,
      merkeziProcessor: merkeziProcessor.current.value,
      daimiYaddash: daimiYaddash.current.value,
      videoCard: videoCard.current.value,
      emeliyatSistemis: emeliyatSistemi.current.value,
    };
    setNoutebooks((notebooks) => [...notebooks, newProduct]);
  };
  return (
    <Modal className="w-100" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yeni</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-between">
        <div className="leftInputs col-6 mx-auto">
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Kategoria:</label>
            <Form.Select
              ref={category}
              className="w-100 rounded"
              aria-label="Default select example"
            >
              <option>Markani sech</option>
              <option value="Acer">Acer</option>
              <option value="HP">HP</option>
              <option value="Asus">Asus</option>
              <option value="Dell">Dell</option>
              <option value="Lenovo">Lenovo</option>
              <option value="LG">LG</option>
              <option value="Casper">Casper</option>
              <option value="Fujitsu">Fujitsu</option>
              <option value="Nexus">Nexus</option>
              <option value="Samsung">Samsung</option>
              <option value="Toshiba">Toshiba</option>
              <option value="Sony">Sony</option>
            </Form.Select>
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Ad:</label>
            <Form.Control
              ref={nouteName}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Qiymet:</label>
            <Form.Control
              ref={price}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Tesvir:</label>
            <Form.Control
              ref={tesvir}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Yeni:</label>
            <Form.Select
              ref={yeni}
              className="w-100 rounded"
              aria-label="Default select example"
            >
              <option value="Beli">Beli</option>
              <option value="Xeyr">Xeyr</option>
            </Form.Select>
          </InputGroup>
          <InputGroup className="mb-3 d-flex flex-column w-100">
            <label htmlFor="">Shekil:</label>
            <Form.Control
              ref={shekil}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="rightInputs col-6 mx-auto">
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Emeli Yaddash(GB):</label>
            <Form.Control
              ref={emeliYaddash}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Merkezi processor:</label>
            <Form.Control
              ref={merkeziProcessor}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Daimi yaddash:</label>
            <Form.Control
              ref={daimiYaddash}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Daimi yaddash tipi:</label>
            <Form.Select
              ref={daimiYaddashTipi}
              className="w-100 rounded"
              aria-label="Default select example"
            >
              <option>Daimim yaddash tipini sech</option>
              <option value="1">SSD</option>
              <option value="2">HDD</option>
            </Form.Select>
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Videokart:</label>
            <Form.Control
              ref={videoCard}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 mx-2">
            <label htmlFor="">Emeliyat sistemi:</label>
            <Form.Control
              ref={emeliyatSistemi}
              className="w-100 rounded"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Baghla
        </Button>
        <Button variant="primary" onClick={addProducts}>
          Yadda saxla
        </Button>
        <Button variant="dark">Melumatlari sifirla</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;

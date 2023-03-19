import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PopUp from "../components/Modal";
import { useState } from "react";

const MyComps = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mycomps-container">
      <div className="header">
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
        <Link>
          <Button variant="warning mx-4">Esas sehife</Button>
        </Link>
        <Link>
          <Button onClick={handleShow} variant="secondary ">
            Yeni komputer
          </Button>
          <PopUp show={show} handleClose={handleClose} />
        </Link>
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
      </div>
      <div className="body ">
        <div className="selectAndSearch my-4 d-flex justify-content-between">
          <div className="select d-flex align-items-center">
            <span className="mx-3">Gorset</span>
            <Form.Select
              style={{ width: "100px" }}
              aria-label="Default select example"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <span className="mx-2">bütövlükdə</span>
          </div>
          <div className="search">
            <InputGroup className="">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1" className="text-center">
                <span>search</span>
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ad</th>
              <th>Shekil</th>
              <th>Qiymet</th>
              <th>Emeliyatdar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default MyComps;

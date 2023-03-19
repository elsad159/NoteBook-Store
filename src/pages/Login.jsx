import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Login = () => {
  return (
    <div className="container border w-50 p-3">
      <section className="header d-flex justify-content-start flex-column align-items-start">
        <Link to="/">
          <Button variant="warning">Esas sehife</Button>
        </Link>
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
        <h4>Hesaba daxil olmaq</h4>
        <div
          className="line bg-light mt-2 w-100"
          style={{ height: "1px" }}
        ></div>
      </section>
      <section className="body">
        <div className="username">
          <p>Istifadecinin adi:</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="password">
          <p>Shifre:</p>
          <InputGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <Button variant="success">Hesaba daxil ol</Button>
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
      </section>
      <section className="footer d-flex align-items-center mt-3 w-50">
        <span>Hesabin yoxdur?</span>
        <Link to="/register">
          <Button className="mx-4">Hesab yarat</Button>
        </Link>
      </section>
    </div>
  );
};
export default Login;

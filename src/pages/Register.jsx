import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Register = () => {
  const loginname = useRef();
  const username = useRef();
  const number = useRef();
  const password = useRef();

  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUsers"))
      ? JSON.parse(localStorage.getItem("registerUsers"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("registerUsers", JSON.stringify(registerUsers));
  }, [registerUsers]);

  const addUser = () => {
    const newUser = {
      username: username.current.value,
      loginname: loginname.current.value,
      number: number.current.value,
      password: password.current.value,
    };
    setRegisterUsers((registerUsers) => [...registerUsers, newUser]);
  };

  return (
    <div className="container border w-50 p-3">
      <section className="header">
        <Link to="/">
          <Button variant="warning">Esas sehife</Button>
        </Link>
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
      </section>
      <section className="body">
        <div className="loginName">
          <p>Ad:</p>
          <InputGroup className="mb-3">
            <Form.Control
              ref={loginname}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="phoneNumber">
          <p>Telefon:</p>
          <InputGroup className="mb-3">
            <Form.Control
              ref={number}
              type="text"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="userName">
          <p>Istifadeci adi:</p>
          <InputGroup className="mb-3">
            <Form.Control
              ref={username}
              type="text"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="password">
          <p>Shifre:</p>
          <InputGroup className="mb-3">
            <Form.Control
              ref={password}
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <Button onClick={addUser} className="success">
          Hesab yarat
        </Button>
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
      </section>
      <section className="footer d-flex">
        <span className="mt-2 mx-3">Artiq hesabin var?</span>
        <Link to="../login">
          <Button variant="secondary">Hesaba daxil ol</Button>
        </Link>
      </section>
    </div>
  );
};

export default Register;

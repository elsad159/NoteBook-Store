import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginUsername = useRef();
  const loginPassword = useRef();
  const navigation = useNavigate();

  const getUsers = JSON.parse(localStorage.getItem("registerUsers"));
  console.log(getUsers);
  const loginButton = () => {
    const chekUsers = getUsers.find(
      (user) => user.username == loginUsername.current.value
    );
    console.log(getUsers.find((user) => user.username));
    if (chekUsers != undefined) {
      navigation("/");
      localStorage.setItem("user", JSON.stringify(chekUsers.username));
      location.reload();
    } else {
      alert("Bele bir istifadechi geyde alinmayib");
    }
  };

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
              ref={loginUsername}
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
              ref={loginPassword}
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <Button onClick={loginButton} variant="success">
          Hesaba daxil ol
        </Button>
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

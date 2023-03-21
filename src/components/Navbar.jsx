import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = localStorage.getItem("user");
  console.log(user);
  return (
    <div className="container-fluid mt-2">
      <div className="line bg-light mb-3 w-100" style={{ height: "1px" }}></div>
      <Link to="buycomp">
        <Button className="mx-2" variant="warning">
          Komputer alish-verishine bashla
        </Button>
      </Link>
      {user == null && (
        <Link to="login">
          <Button variant="success">Hesaba daxil olmaq</Button>
        </Link>
      )}
      <Link to="mycomp">
        <Button variant="dark mx-2">Menim komputerlerim</Button>
      </Link>
      <Link to="/">
        <Button variant="info mx-2">Esas Sehife</Button>
      </Link>
      <div className="line bg-light my-3 w-100" style={{ height: "1px" }}></div>
    </div>
  );
};

export default Navbar;

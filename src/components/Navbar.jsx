import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="line bg-light mb-3 w-100" style={{ height: "1px" }}></div>
      <Link to="buycomp">
        <Button className="mx-2" variant="warning">
          Komputer alish-verishine bashla
        </Button>
      </Link>
      <Link to="login">
        <Button variant="success">Hesaba daxil olmaq</Button>
      </Link>
      <div className="line bg-light my-3 w-100" style={{ height: "1px" }}></div>
      
    </div>
  );
};

export default Navbar;

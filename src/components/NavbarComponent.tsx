import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div style={{ paddingLeft: "0.5%" }}>
          <img src={logo} alt="logo" style={{ width: "40%" }} />
        </div>

        <Container>
          <Navbar.Brand href="#home">Routing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contact-us"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

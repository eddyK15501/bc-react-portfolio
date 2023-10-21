/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-primary" fixed="top">
        <Container>
          <Navbar.Brand className="fs-1 text-light" as={Link} to="/">
            <FontAwesomeIcon icon={faCameraRetro} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav text-light">
            <Nav className="ms-auto fs-6 nav-fg">
              <Nav.Link className="mx-auto text-light" as={Link} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link className="mx-auto text-light" as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="mx-auto text-light" as={Link} to="/contact">
                Contact Me
              </Nav.Link>
              <Nav.Link className="mx-auto text-light" as={Link} to="/resume">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
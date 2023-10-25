/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarLink = ({ closeNavbar, path, children }) => {
  return (
    <Nav.Link
      className="mx-auto text-light"
      as={Link}
      to={path}
      onClick={closeNavbar}
    >
      {children}
    </Nav.Link>
  );
};

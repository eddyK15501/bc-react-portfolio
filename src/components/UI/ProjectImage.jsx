/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col } from "react-bootstrap";

const ProjectImage = ({ handleMouseEnter, handleMouseLeave, children }) => {
  return (
    <Col lg={4} className="d-flex justify-content-center">
      <div
        className="img-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-contain position-relative">
          {children}
        </div>

        <p>Todolist-Fullstack</p>
      </div>
    </Col>
  );
};

export default ProjectImage;

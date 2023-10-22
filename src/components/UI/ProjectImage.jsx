/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col } from "react-bootstrap";

const ProjectImage = ({ handleMouseEnter, handleMouseLeave, title, children }) => {
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

        <h5 className="mt-2 text-secondary-emphasis">{title}</h5>
      </div>
    </Col>
  );
};

export default ProjectImage;

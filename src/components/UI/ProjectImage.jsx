import React from "react";
import { Col } from "react-bootstrap";

const ProjectImage = (props) => {
  return (
    <Col lg={4} className="d-flex justify-content-center">
      <div
        className="img-container"
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
      >
        <div className="img-contain position-relative">
          {props.children}
        </div>

        <p>Todolist-Fullstack</p>
      </div>
    </Col>
  );
};

export default ProjectImage;

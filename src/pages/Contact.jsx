/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "../sass/Contact.scss";

const Contact = () => {
  return (
    <Container className="vw-vh d-flex justify-content-center align-items-center">
      <div className="w-100 flex-grow-1 flex-shrink-1">
        <h1 className="text-center">Let's Connect!</h1>
      </div>

      <Form className="w-100 flex-grow-1 flex-shrink-1" id="contact-form">
        <InputGroup>
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faEnvelope} />
          </InputGroup.Text>
          <Form.Control type="email" placeholder="Your Email Address" />
        </InputGroup>

        <InputGroup className="mt-4">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faCommentDots} />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Title" />
        </InputGroup>

        <FloatingLabel
          className="mt-4"
          controlId="floatingTextarea2"
          label="Send Me A Message!"
          style={{ color: "grey" }}
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "250px", resize: "none", color: "#000" }}
          />
        </FloatingLabel>
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <Button className="w-25" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;

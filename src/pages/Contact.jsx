/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactLinks from "../components/ContactLinks";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

import "../sass/Contact.scss";

const Contact = () => {
  return (
    <Container className="vw-vh d-flex justify-content-center align-items-center">
      <div className="w-100 flex-grow-1 flex-shrink-1">
        <h1 className="text-center mb-5">Let's Connect!</h1>
        <Container className="d-flex flex-column justify-content-center align-items-start contact-links">
          <ContactLinks
            link="https://www.github.com/eddyK15501"
            title="https://www.github.com/eddyK15501"
          >
            <AiOutlineGithub size={40} style={{ marginRight: "0.5rem" }} />
          </ContactLinks>

          <ContactLinks
            link="https://www.linkedin.com/in/edwardkim1231"
            title="https://www.linkedin.com/in/edwardkim1231"
          >
            <AiOutlineLinkedin size={40} style={{ marginRight: "0.5rem" }} />
          </ContactLinks>

          <ContactLinks
            link="mailto:fifteenbackwoods501@gmail.com"
            title="fifteenbackwoods501@gmail.com"
          >
            <MdOutlineAlternateEmail
              size={35}
              style={{ marginLeft: "0.1rem", marginRight: "0.7rem" }}
            />
          </ContactLinks>
        </Container>
      </div>

      <Form
        className="w-100 flex-grow-1 flex-shrink-1"
        data-netlify="true"
        method="post"
        style={{ padding: "2rem 7.5rem 0" }}
      >
        <InputGroup>
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faEnvelope} />
          </InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email Address"
          />
        </InputGroup>

        <InputGroup className="mt-4">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faCommentDots} />
          </InputGroup.Text>
          <Form.Control type="text" name="title" placeholder="Title" />
        </InputGroup>

        <FloatingLabel
          className="mt-4"
          controlId="floatingTextarea2"
          label="Send Me A Message!"
          style={{ color: "grey" }}
        >
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Leave a comment here"
            style={{ height: "180px", resize: "none", color: "#000" }}
          />
        </FloatingLabel>
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <Button className="w-25" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;

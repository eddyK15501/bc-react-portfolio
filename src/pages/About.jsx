/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../sass/About.scss";

const About = () => {
  return (
    <Container
      fluid
      className="vw-vh d-flex justify-content-center align-items-center"
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        id="about"
      >
        <Row className="w-100 gx-5 fg-2">
          <Col lg={4} className="d-flex justify-content-center">
            <div className="img-container">
              <a
                href="https://github.com/eddyK15501/react-portfolio-bc/issues/1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://user-images.githubusercontent.com/88423414/282337254-724defad-c026-4af3-bf25-d6aa7b305681.jpg"
                  alt="portfolio-image"
                />
                <h6 className="mt-3 text-secondary-emphasis">✌️ Nov. 12, 2023</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={5}
            className="d-flex flex-column justify-content-center text-center text-lg-start"
          >
            <h3 className="mb-3">👋 Hi there.</h3>
            <p className="mb-3">
              I'm Edward. I'm a frontend web developer based out of Chapel Hill,
              North Carolina. My objective is to create visually stunning web
              applications that captivate users and elevate their online
              experience.
            </p>
            <p className="mb-4">
              Anyway, get to know me a little bit! I'm just a fun guy who loves
              to code, explore new technologies, and create amazing web
              experiences. Whether it's solving complex coding challenges or
              embarking on outdoor adventures, I'm always up for a good
              challenge. If you're looking for a frontend aficionado who brings
              enthusiasm and creativity to every project, you've come across the
              right guy.
            </p>
            <h5
              className="fw-bold text-center text-lg-end me-5"
              style={{ fontFamily: "Over the Rainbow, cursive" }}
            >
              Cheers.
            </h5>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;

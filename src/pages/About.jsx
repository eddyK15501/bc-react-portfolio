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
                href="https://github.com/eddyK15501/react-portfolio-bc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://private-user-images.githubusercontent.com/88423414/287524279-e69ada94-19d4-4551-b8ed-cc479aff8a26.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MTM0MjgsIm5iZiI6MTcwMTYxMzEyOCwicGF0aCI6Ii84ODQyMzQxNC8yODc1MjQyNzktZTY5YWRhOTQtMTlkNC00NTUxLWI4ZWQtY2M0NzlhZmY4YTI2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDE0MTg0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTViYjU0ZGMxOWM2NDdmNjRjZGE3NWFkOTEyMzA3YTI1NmFjMmYxZjg5MmYxYTQyMzU1Zjk5MjQzMWJkYWRkMWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7Q4UMkxrylEMLBuhuKMQX4rlyuDWcA6ARPUfidQ7ja4"
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

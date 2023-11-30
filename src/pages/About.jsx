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
                  src="https://lh3.googleusercontent.com/pw/ADCreHfXtKZb_6DKZGMhQcjYfsjFXe_WVZlpXujUMCWBg5sp9kbAPqGWCuSLVBmA6m58B0LtFH1bpM1Iil3AP6hCRs8WDVWWl3RN3TUaMZkaUkT09bJ2TTsbpKNuWFVMOAxfPVTLr8qq719b2FSmTpswbSzApF2qFjeEN2ayXuGYZFu16Oj3j_K_JrsXg02PWYRYNppEqYX0eT4oeCjPuKSeWxcGZI0bees3KqA4ENfGAhC5RajsJl_Xi4oMLfS9Ea_QLVAOlWvk3IgLaQRYQ3UhHVIqUfd3PPlmlCIT_Mcd2zuBkzQtSep_h2Q8rPN-sTUhJqqjKdyDhX0p_s1htYAYKoK_P4vS7aI30YyBbP0-qcBV2JYNLVXnJw72iK1xpcdyH_IPfjOfuvZubV3xjTrfJFmQzIgirWMpoc-KJ3hTj9ymuq8g-2RQRLfJfWh5LAUzm3U_hR8G9mHkPlghy6gzsVjIU_-Q-Ti0vFLI65tXQTdWyF91DLxhC-fFlQlUfmkIS39iGuJhIzFzK5LWEXWLtcKlywlXV5pPtO68F5Vb2vyO6cxqtQvCz1TLor-Z0FED1z_ZqxB_DAG9bO0e5Zr6f5QMjseTSEFR6BYKo7S89ADG2yHyehKoFFSSzo18xyAolqntn92t_uFy5dyjCpahHYafEzUu6Zwu8x41QGuKa8QDx11sgW4UAio5Fc-Qb1WUnEf9cgkfF5lCbBl84PkT6ObpQR3e2jxYaaTQUnkynSJD6I4UTFAuK3yqwGKuDYIDh1gCpwYUCJkEMnHA8usncHYQS4E76pgRvUpPtIOsot7D1K_VU-CseCes1XSC5cQV0WUxMZxgzrH2RFoPRmDjZBxS6fYopHl33pP3khlL151mZNB5TYU53Bp8FtHMtUOw_1gDtd7LDiRIhCt_x-4fbhiEsktJESVDSL-KM5SWZu-w0UeYVUnlXe8s47_xCls=w1284-h1460-s-no-gm?authuser=0"
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

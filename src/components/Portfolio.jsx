import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../sass/Portfolio.scss';

const Portfolio = () => {
  

  return (
      <Container fluid className="vw-vh">
        <div className="text-center mb-5" id="portfolio-heading">
          <h1 className="display-6">Portfolio</h1>
        </div>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Container className="d-flex justify-content-center align-items-center">
            <Row className="gx-5 justify-content-center text-center">
              <Col lg={4} className="d-flex justify-content-center">
                <div id="img-container">

                  <a href="https://eddyk15501.github.io/portfolio/">
                    <img src="" alt="project-one" />
                  </a>

                  <p>React Portfolio</p>
                </div>
              </Col>
              <Col lg={4} className="d-flex justify-content-center">
                <div id="img-container">

                  <a href="https://eddyk15501.github.io/unc-bootcamp-project-01/">
                    <img src="https://user-images.githubusercontent.com/88423414/277141422-189d5995-0d64-4035-b500-1b1f35543335.png" alt="project-two-image" />
                    <img src="https://user-images.githubusercontent.com/88423414/277140769-6ec20297-6bd3-46aa-87e3-594377d1518b.gif" alt="project-two-gif" />
                  </a>

                  <p>Gif Me</p>
                </div>
              </Col>
              <Col lg={4} className="d-flex justify-content-center">
                <div id="img-container">

                  <a href="https://eddyk15501-todolist-fullstack-10e1ec26e1dc.herokuapp.com/">
                    <img src="" alt="project-three" />
                  </a>
                  
                  <p>Todolist-Fullstack</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
  );
};

export default Portfolio;

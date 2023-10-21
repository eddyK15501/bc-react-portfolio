/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return ( 
    <Container fluid className="background-pic d-flex justify-content-center align-items-center">
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="w-100 gx-5 fg">
                <Col lg={4} className="d-flex justify-content-center mt-5">
                    <div id="img-container">
                        <a href="https://github.com/eddyK15501/react-portfolio-bc/issues/1">
                            <img src="https://user-images.githubusercontent.com/88423414/277078695-7f115a5c-ec72-4038-997f-55606e4dd8d6.jpg" alt="portfolio-image" />
                        </a>
                    </div>
                </Col>
                <Col lg={5} className="d-flex flex-column justify-content-center text-center text-lg-start">
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sint ab dolorum enim ut pariatur architecto optio debitis tempora, delectus ad suscipit! Doloremque modi tempore, cum aperiam illum, nesciunt voluptate quo magnam facilis natus voluptas minus perspiciatis neque ipsam minima, ab id eius libero a debitis. Quibusdam quidem culpa voluptas?</p>
                </Col>
            </Row>
        </Container>
    </Container>
  );
};

export default About;

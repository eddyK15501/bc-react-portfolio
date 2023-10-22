import { useState } from "react";
import ProjectImage from "./UI/ProjectImage"
import { Col, Container, Row } from "react-bootstrap";
import '../sass/Portfolio.scss';

const Portfolio = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
      <Container fluid className="vw-vh">
        <div className="text-center mb-5" id="portfolio-heading">
          <h1 className="display-6">Portfolio</h1>
        </div>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Container className="d-flex justify-content-center align-items-center">
            <Row className="gx-5 justify-content-center text-center">

              <Col lg={4} className="d-flex justify-content-center">
                <div className="img-container">

                  <div className="img-contain position-relative">
                    <a href="https://eddyk15501.github.io/portfolio/">
                      <img className={hover ? 'static-image' : ''} src="https://user-images.githubusercontent.com/88423414/277144826-8dadb407-c950-44d1-8c28-493baf3aad13.png" alt="project-one-image" />
                      <img className={`gif ${hover ? '' : 'gif-image'}`} src="https://user-images.githubusercontent.com/88423414/277144752-d6c5630b-2fa8-4433-a565-4bd26321a5e2.gif" alt="project-one-gif" />
                    </a>
                  </div>

                  <p>React Portfolio</p>
                </div>
              </Col>

            <ProjectImage {...handleMouseEnter} {...handleMouseLeave}>
                <a href="https://eddyk15501.github.io/unc-bootcamp-project-01/">
                      <img className={hover ? 'static-image' : ''} src="https://user-images.githubusercontent.com/88423414/277141422-189d5995-0d64-4035-b500-1b1f35543335.png" alt="project-two-image" />
                      <img className={`gif ${hover ? '' : 'gif-image'}`} src="https://user-images.githubusercontent.com/88423414/277140769-6ec20297-6bd3-46aa-87e3-594377d1518b.gif" alt="project-two-gif" />
                    </a>
            </ProjectImage>

              {/* <Col lg={4} className="d-flex justify-content-center">
                <div className="img-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                  <div className="img-contain position-relative">
                    <a href="https://eddyk15501.github.io/unc-bootcamp-project-01/">
                      <img className={hover ? 'static-image' : ''} src="https://user-images.githubusercontent.com/88423414/277141422-189d5995-0d64-4035-b500-1b1f35543335.png" alt="project-two-image" />
                      <img className={`gif ${hover ? '' : 'gif-image'}`} src="https://user-images.githubusercontent.com/88423414/277140769-6ec20297-6bd3-46aa-87e3-594377d1518b.gif" alt="project-two-gif" />
                    </a>
                  </div>

                  <p>Gif Me</p>
                </div>
              </Col> */}

              <ProjectImage {...handleMouseEnter} {...handleMouseLeave}>
                <a href="https://eddyk15501-todolist-fullstack-10e1ec26e1dc.herokuapp.com/">
                  <img
                    className={hover ? "static-image" : ""}
                    src="https://user-images.githubusercontent.com/88423414/277143541-499aefd8-d74a-492a-8c83-a780431f0c12.png"
                    alt="project-three-image"
                  />
                  <img
                    className={`gif ${hover ? "" : "gif-image"}`}
                    src="https://user-images.githubusercontent.com/88423414/277143527-2ef9f6b1-4168-4bff-b435-87a738f7ce41.gif"
                    alt="project-three-gif"
                  />
                </a>
              </ProjectImage>

              {/* <Col lg={4} className="d-flex justify-content-center">
                <div className="img-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                  <div className="img-contain position-relative">
                    <a href="https://eddyk15501-todolist-fullstack-10e1ec26e1dc.herokuapp.com/">
                      <img className={hover ? 'static-image' : ''} src="https://user-images.githubusercontent.com/88423414/277143541-499aefd8-d74a-492a-8c83-a780431f0c12.png" alt="project-three-image" />
                      <img className={`gif ${hover ? '' : 'gif-image'}`} src="https://user-images.githubusercontent.com/88423414/277143527-2ef9f6b1-4168-4bff-b435-87a738f7ce41.gif" alt="project-three-gif" />
                    </a>
                  </div>

                  <p>Todolist-Fullstack</p>
                </div>
              </Col> */}

            </Row>
          </Container>
        </Container>
      </Container>
  );
};

export default Portfolio;

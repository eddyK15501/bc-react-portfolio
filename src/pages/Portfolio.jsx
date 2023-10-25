import { useState } from "react";
import ProjectImage from "../components/Portfolio/ProjectImage";
import { Container, Row } from "react-bootstrap";
import "../sass/Portfolio.scss";

const Portfolio = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Container
      fluid
      className="vw-vh d-flex justify-content-center align-items-center"
      id="portfolio"
    >
      <Container className="d-flex flex-column justify-content-center align-items-center project-container">
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="gx-5 justify-content-center text-center flex-wrap project-row">
            <ProjectImage
              {...handleMouseEnter}
              {...handleMouseLeave}
              title="React Portfolio"
            >
              <a
                href="https://eddyk15501.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={hover ? "static-image" : ""}
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project-one-image"
                />
                <img
                  className={`gif ${hover ? "" : "gif-image"}`}
                  src="https://user-images.githubusercontent.com/88423414/277144752-d6c5630b-2fa8-4433-a565-4bd26321a5e2.gif"
                  alt="project-one-gif"
                />
              </a>
            </ProjectImage>

            <ProjectImage
              {...handleMouseEnter}
              {...handleMouseLeave}
              title="Gif-Me"
            >
              <a
                href="https://eddyk15501.github.io/unc-bootcamp-project-01/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={hover ? "static-image" : ""}
                  src="https://images.unsplash.com/photo-1518548183878-5e1fcea68bb9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project-two-image"
                />
                <img
                  className={`gif ${hover ? "" : "gif-image"}`}
                  src="https://user-images.githubusercontent.com/88423414/277140769-6ec20297-6bd3-46aa-87e3-594377d1518b.gif"
                  alt="project-two-gif"
                />
              </a>
            </ProjectImage>

            <ProjectImage
              {...handleMouseEnter}
              {...handleMouseLeave}
              title="Todolist-Fullstack"
            >
              <a
                href="https://eddyk15501-todolist-fullstack-10e1ec26e1dc.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={hover ? "static-image" : ""}
                  src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80&w=2839&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project-three-image"
                />
                <img
                  className={`gif ${hover ? "" : "gif-image"}`}
                  src="https://user-images.githubusercontent.com/88423414/277143527-2ef9f6b1-4168-4bff-b435-87a738f7ce41.gif"
                  alt="project-three-gif"
                />
              </a>
            </ProjectImage>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Portfolio;

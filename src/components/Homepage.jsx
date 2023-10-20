/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import "../sass/Homepage.scss";

const TEXTS = ["Frontend Web Development", "Reimagined"];

const Homepage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => prev + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
      id="homepage-background"
    >
      <div className="d-flex flex-column">
        <h1 className="display-4 fw-normal text-primary-emphasis">
          React Portfolio
        </h1>
      <div className="mt-1 align-self-center">
        <TextTransition
          className="fs-5 text-secondary"
          springConfig={presets.wobbly}
          >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>
    </div>
    </div>
  );
};

export default Homepage;

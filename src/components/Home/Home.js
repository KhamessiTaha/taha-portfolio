import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }, () => ({
        left: Math.random() * 90,
        top: Math.random() * 100,
        animationDuration: Math.random() * 3 + 1,
        twinkle: Math.random() > 0.8, 
        shooting: Math.random() > 0.98, 
      }));
    };
    setStars(generateStars());
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        {stars.map((star, index) => (
          <div
            key={index}
            className={`star ${star.twinkle ? "twinkle" : ""} ${
              star.shooting ? "shooting" : ""
            }`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Exploring the Digital Cosmos{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🌌
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Taha Khamessi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="planet-container">
                <div className="planet">
                  <div className="ring"></div>
                  <img
                    src={homeLogo}
                    alt="planet illustration"
                    className="img-fluid floating"
                    style={{ maxHeight: "450px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

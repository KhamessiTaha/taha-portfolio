import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY <span className="purple"> DIGITAL COSMOS </span>
            </h1>
            <p className="home-about-body">
              My journey in the tech industry mirrors the boundless nature of the cosmos—driven by exploration and infinite possibilities. 🌌
              <br />
              <br />
              I leverage programming languages such as{" "}
              <i>
                <b className="purple">JavaScript, Python, and Java</b>
              </i>{" "}
              to design and implement innovative, end-to-end solutions. With a strong foundation in{" "}
              <i>
                <b className="purple">Full-Stack Development and Machine Learning</b>
              </i>
              , I strive to create applications that not only address real-world challenges but also inspire curiosity and innovation.
              <br />
              <br />
              My technical expertise includes tools and frameworks like{" "}
              <i>
                <b className="purple">React.js</b>, <b className="purple">Node.js</b>,{" "}
                <b className="purple">Three.js</b>, and <b className="purple">TensorFlow</b>
              </i>
              , which enable me to deliver cutting-edge solutions across diverse domains.
            </p>
            <ul className="quick-stats">
              <li>
                <span className="stat-icon">🌟</span>
                <div className="stat-content">
                  <strong>Experienced</strong>
                  <p>in building full-stack and AI-driven applications.</p>
                </div>
              </li>
              <li>
                <span className="stat-icon">🚀</span>
                <div className="stat-content">
                  <strong>15+ projects</strong>
                  <p>developed, from concept to deployment.</p>
                </div>
              </li>
              <li>
                <span className="stat-icon">🎓</span>
                <div className="stat-content">
                  <strong>Bachelor’s</strong>
                  <p>in Computer Science from ISTIC Borj Cedria, Tunisia.</p>
                </div>
              </li>
            </ul>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="astronaut-container">
                <img src={myImg} className="img-fluid floating-astronaut" alt="avatar" />
                <div className="stars-background"></div>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

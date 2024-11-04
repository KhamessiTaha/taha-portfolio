import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              My journey in the tech universe parallels the vastness of the cosmos—full of exploration and endless potential. 🌌
              <br />
              <br />
              Just as galaxies are formed by countless stars, I combine{" "}
              <i>
                <b className="purple">JavaScript, Python, Dart</b>
              </i>
              , and an array of frameworks to craft innovative, end-to-end solutions.
              With the power of{" "}
              <i>
                <b className="purple">Machine Learning and Deep Learning</b>
              </i>
              , I strive to create applications that not only solve problems but inspire wonder.
              <br />
              <br />
              My core passions revolve around{" "}
              <i>
                <b className="purple">Full-stack development and Artificial Intelligence</b>
              </i>
              , especially within the realms of{" "}
              <b className="purple">Data Science</b> and <b className="purple">Interactive Web Experiences</b>.
              <br />
              <br />
              Like a well-calculated space mission, I launch projects with{" "}
              <b className="purple">React.js</b> and <b className="purple">Node.js</b>, enhanced by
              <b className="purple"> TensorFlow</b> and <b className="purple">Keras</b>, aiming to bridge the gap between technology and imagination.
            </p>
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT ACROSS THE UNIVERSE</h1>
            <p>
              Reach out and let's create <span className="purple">something extraordinary</span> together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KhamessiTaha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub className="orbital-icon" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taha-khamessi-396aba1a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn className="orbital-icon" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/quantumquasar24/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram className="orbital-icon" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

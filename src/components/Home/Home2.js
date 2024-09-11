import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’ve always been passionate about coding, and over time
            , I’ve honed my skills to make things that I’m proud of. 🎸
              <br />
              <br />I’m well-versed in modern web technologies like 
              <i>
                <b className="purple"> JavaScript, Python, and Dart, </b>
              </i>
              <br />with a strong foundation in 
              <i>
                <b className="purple"> Machine learning and Deep learning. </b>
              </i>
              <br />
              <br />
              <br />
              My main areas of interest lie in &nbsp;
              <i>
                <b className="purple">Full-stack web development, building innovative applications </b> and
                exploring the fascinating world of{" "}
                <b className="purple">
                 Artificial Intelligence and Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever I can, I bring my expertise in <b className="purple">Node.js, React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Tensorflow and Keras </b>
                to life through unique and impactful projects!
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KhamessiTaha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taha-khamessi-396aba1a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/quantumquasar24/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

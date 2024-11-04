import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Crafted with passion by Taha Khamessi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {currentYear} | All Rights Reserved</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/KhamessiTaha"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub className="social-icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/taha-khamessi-396aba1a3/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="social-icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/quantumquasar24/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram className="social-icon" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

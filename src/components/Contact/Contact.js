import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from '@emailjs/browser';
import { 
  RiMailLine, 
  RiLinkedinBoxLine, 
  RiGithubLine, 
  RiMapPinLine,
  RiSendPlaneLine 
} from "react-icons/ri";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          showNotification('Message sent successfully!', 'success');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          showNotification('Failed to send message. Please try again.', 'danger');
          console.error('EmailJS Error:', error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container fluid className="about-section position-relative">
      <Particle />
      <Container 
        className="d-flex justify-content-center align-items-center" 
        style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}
      >
        <Row className="w-100 justify-content-center">
          <Col lg={10} className="position-relative" style={{ zIndex: 2 }}>
            <div className="contact-wrapper p-4 rounded" 
                 style={{ 
                   background: "rgba(17, 16, 25, 0.8)", 
                   backdropFilter: "blur(10px)",
                   border: "1px solid rgba(148, 96, 223, 0.2)",
                   boxShadow: "0 8px 32px rgba(148, 96, 223, 0.1)"
                 }}>
              {notification.show && (
                <Alert 
                  variant={notification.type}
                  className="mb-4 text-center"
                  style={{ animation: "slideDown 0.5s ease-out" }}
                >
                  {notification.message}
                </Alert>
              )}

              <h1 className="text-center mb-5" style={{ 
                fontSize: "2.5em",
                background: "linear-gradient(45deg, #9460df, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "fadeIn 1s ease-out"
              }}>
                Get in Touch
              </h1>

              <Row className="gy-4">
                <Col md={5}>
                  <div className="contact-info pe-md-4" style={{ animation: "fadeIn 1s ease-out 0.2s backwards" }}>
                    <h3 className="mb-4 text-white">Contact Information</h3>
                    <div className="contact-items d-flex flex-column gap-4">
                      <div className="hover-effect d-flex align-items-center">
                        <div className="icon-wrapper me-3" style={{
                          background: "rgba(148, 96, 223, 0.1)",
                          padding: "10px",
                          borderRadius: "50%"
                        }}>
                          <RiMailLine className="purple" size={25} />
                        </div>
                        <a href="mailto:taha.khamessi@gmail.com" className="text-white">
                          taha.khamessi@gmail.com
                        </a>
                      </div>
                      <div className="hover-effect d-flex align-items-center">
                        <div className="icon-wrapper me-3" style={{
                          background: "rgba(148, 96, 223, 0.1)",
                          padding: "10px",
                          borderRadius: "50%"
                        }}>
                          <RiLinkedinBoxLine className="purple" size={25} />
                        </div>
                        <a href="https://www.linkedin.com/in/taha-khamessi-396aba1a3/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-white">
                          LinkedIn Profile
                        </a>
                      </div>
                      <div className="hover-effect d-flex align-items-center">
                        <div className="icon-wrapper me-3" style={{
                          background: "rgba(148, 96, 223, 0.1)",
                          padding: "10px",
                          borderRadius: "50%"
                        }}>
                          <RiGithubLine className="purple" size={25} />
                        </div>
                        <a href="https://github.com/khamessitaha" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-white">
                          GitHub Profile
                        </a>
                      </div>
                      <div className="hover-effect d-flex align-items-center">
                        <div className="icon-wrapper me-3" style={{
                          background: "rgba(148, 96, 223, 0.1)",
                          padding: "10px",
                          borderRadius: "50%"
                        }}>
                          <RiMapPinLine className="purple" size={25} />
                        </div>
                        <span className="text-white">Ben Arous, Tunisia</span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={7}>
                  <Form ref={form} onSubmit={handleSubmit} style={{ animation: "fadeIn 1s ease-out 0.4s backwards" }}>
                    <Form.Group className="mb-4">
                      <Form.Label className="text-white-50">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="form-control-space"
                        disabled={isLoading}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="text-white-50">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="form-control-space"
                        disabled={isLoading}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="text-white-50">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your message"
                        required
                        className="form-control-space"
                        disabled={isLoading}
                        style={{ resize: "none" }}
                      />
                    </Form.Group>

                    <div className="text-end">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-space"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="d-flex align-items-center gap-2">
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Sending...
                          </div>
                        ) : (
                          <div className="d-flex align-items-center gap-2">
                            <RiSendPlaneLine size={20} />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
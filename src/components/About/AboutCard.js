import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          As a graduate of The Higher Institute of Information Technologies and Communication (ISTIC) in Tunisia, holding a Bachelor's degree in Computer Science, my passion lies in software development, with a focus on machine learning and artificial intelligence. I have a strong foundation in both the theoretical and practical aspects of computer science, and I’m particularly interested in data analysis and data science. I'm fascinated by the challenge of extracting meaningful insights from data using advanced tools and models. I’m also passionate about astronomy and astrophysics, and I aim to apply my expertise in AI and data science to explore and contribute to these fields. Driven by a commitment to continuous learning and innovation, I’m always seeking to expand my knowledge and push the boundaries of technology.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The universe is either perfectly random or randomly perfect, and both possibilities are equally beautiful and fascinating. !"{" "}
          </p>
          <footer className="blockquote-footer">Taha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

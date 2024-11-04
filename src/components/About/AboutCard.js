import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Header className="bg-transparent border-0">
        <h2 className="text-center mb-3">About Me</h2>
      </Card.Header>
      
      <Card.Body>
        <blockquote className="blockquote">
          {/* Professional Background Section */}
          <div className="mb-4">
            <p style={{ 
              textAlign: "justify",
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              As a graduate of The Higher Institute of Information Technologies and Communication (ISTIC) 
              in Tunisia, holding a Bachelor's degree in Computer Science, my passion lies in software 
              development, with a focus on machine learning and artificial intelligence.
            </p>

            <p style={{ 
              textAlign: "justify",
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              I have a strong foundation in both the theoretical and practical aspects of computer science, 
              and I'm particularly interested in data analysis and data science. I'm fascinated by the 
              challenge of extracting meaningful insights from data using advanced tools and models.
            </p>

            <p style={{ 
              textAlign: "justify",
              lineHeight: "1.6",
              marginBottom: "2rem"
            }}>
              I'm also passionate about astronomy and astrophysics, and I aim to apply my expertise 
              in AI and data science to explore and contribute to these fields. Driven by a commitment 
              to continuous learning and innovation, I'm always seeking to expand my knowledge and 
              push the boundaries of technology.
            </p>
          </div>

          {/* Quote Section */}
          <div style={{
            borderLeft: "4px solid rgb(155, 126, 172)",
            paddingLeft: "1rem",
            marginTop: "2rem"
          }}>
            <p style={{ 
              color: "rgb(155, 126, 172)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              marginBottom: "0.5rem"
            }}>
              "The universe is either perfectly random or randomly perfect, and both possibilities are equally beautiful and fascinating!"
            </p>
            <footer className="blockquote-footer" style={{ marginTop: "1rem" }}>
              <cite title="Source">Taha</cite>
            </footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
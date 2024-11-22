import React from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap,  FaChartLine, FaRocket } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Header className="bg-transparent border-0">
        <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="text-center mb-3">About <strong className="purple">Me</strong></h2>
        
      </Card.Header>
      
      <Card.Body>
        <blockquote className="blockquote">
          {/* Professional Background Section */}
          <div className="mb-4">
            <h3 className="mb-3">
              <FaGraduationCap className="icon" color="purple" /> Education & Background
            </h3>
            <p style={{ textAlign: "justify", lineHeight: "1.6" }}>

            As a graduate of The Higher Institute of Information Technologies and Communication (ISTIC) in Tunisia, I hold a Bachelor's degree in Computer Science. My passion lies in software development, with a strong focus on Full-Stack Development and Machine Learning. In addition to my academic background, I have gained substantial experience through the development of numerous personal projects, where I applied my knowledge in real-world scenarios to build end-to-end solutions and solve complex problems.            </p>
          </div>

          <div className="mb-4">
            <h3 className="mb-3">
              <FaChartLine className="icon" color="purple" /> Skills & Interests
            </h3>
            <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
              I have a solid foundation in both the theoretical and practical aspects of computer science. 
              My expertise extends to data analysis and data science, where I enjoy the challenge of extracting 
              meaningful insights from data using advanced tools and models.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="mb-3">
              <FaRocket className="icon" color="purple" /> Vision & Passion
            </h3>
            <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
              My curiosity extends to astronomy and astrophysics, where I aim to apply my skills in Software Development 
              and AI to explore and contribute to these fields. I’m driven by a commitment to 
              continuous learning, innovation, and pushing the boundaries of technology.
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

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, isBlog, title, description, ghLink, demoLink }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(167, 139, 250, 0.1)",
    borderRadius: "12px",
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "translateY(-5px)" : "none",
    boxShadow: isHovered 
      ? "0 0 20px rgba(167, 139, 250, 0.4), 0 0 30px rgba(167, 139, 250, 0.3)"
      : "0 4px 8px rgba(0, 0, 0, 0.2)",
    height: "100%",
    overflow: "hidden",
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const buttonStyle = {
    background: "rgba(167, 139, 250, 0.8)",
    border: "none",
    padding: "8px 16px",
    transition: "all 0.3s ease-in-out",
    margin: "5px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  };

  const buttonHoverStyle = {
    background: "rgba(167, 139, 250, 1)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(167, 139, 250, 0.3)",
  };

  const titleStyle = {
    color: "#a78bfa",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "0 0 10px rgba(167, 139, 250, 0.3)",
  };

  const descriptionStyle = {
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "1.5rem",
  };

  return (
    <Card 
      className="project-card-view"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Card.Img 
          variant="top" 
          src={imgPath} 
          alt="card-img" 
          style={imageStyle}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
        }} />
      </div>
      
      <Card.Body style={{ position: "relative" }}>
        <Card.Title style={titleStyle}>{title}</Card.Title>
        <Card.Text style={descriptionStyle}>
          {description}
        </Card.Text>
        
        <div style={{ marginTop: "auto" }}>
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            style={buttonStyle}
            className="github-btn"
            onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
          >
            <BsGithub style={{ fontSize: "1.2em" }} />
            {isBlog ? "Blog" : "GitHub"}
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={buttonStyle}
              className="demo-btn"
              onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
            >
              <CgWebsite style={{ fontSize: "1.2em" }} />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
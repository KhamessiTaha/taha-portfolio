import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alpr from "../../Assets/Projects/alpr.jpg";
import petmatch from "../../Assets/Projects/petmatch.png";
import htru2 from "../../Assets/Projects/htru2.jpg";
import carvision from "../../Assets/Projects/carvision.png";
import shell from "../../Assets/Projects/shell.png";
import ps from "../../Assets/Projects/ps.jpg";
import cosmicvue from "../../Assets/Projects/cosmicvue.jpg";
import cceditor from "../../Assets/Projects/cceditor.png";

function Projects() {
  return (
    <Container fluid className="project-section" style={{
      background: "linear-gradient(to bottom right, #1e1b4b, #312e81)",
      minHeight: "100vh",
      position: "relative",
      padding: "100px 0",
    }}>
      <Particle />
      
      {/* Animated stars background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at center, rgba(167,139,250,0.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        animation: "twinkle 2s infinite alternate",
        opacity: 0.5,
        zIndex: 0,
      }} />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <h1 className="text-center mb-5" style={{
          color: "#a78bfa",
          fontSize: "2.5em",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(167, 139, 250, 0.5)",
        }}>
          My Recent <strong style={{ color: "#c4b5fd" }}>Work </strong>
        </h1>
        
        <p style={{
          color: "rgba(255, 255, 255, 0.9)",
          textAlign: "center",
          fontSize: "1.2em",
          marginBottom: "3rem",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          Exploring the boundaries of technology through innovative projects
        </p>

        <Row style={{ 
          justifyContent: "center", 
          gap: "2rem 0",
          margin: "0 -15px"
        }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmicvue}
              isBlog={false}
              title="CosmicVue 🌌"
              description="An immersive project that brings the cosmos to your screen. This interactive web application creates a stunning visualization of our solar system and tracks Near-Earth Objects in real-time, featuring accurate astronomical data and mesmerizing 3D renders of celestial bodies.Recognized as a Global Finalist for the 2024 NASA International Space Apps Challenge"
              ghLink="https://github.com/KhamessiTaha/CosmoArchitects"
              demoLink="https://cosmicvue.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carvision}
              isBlog={false}
              title="CarVision 🚗"
              description="A cutting-edge AI solution that transforms automotive analysis. This deep learning system combines computer vision and machine learning to instantly classify vehicles and predict market values from images, powered by TensorFlow and delivered through a sleek Flutter mobile app with Node.js backend."
              ghLink="https://github.com/KhamessiTaha/CarVisionProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cceditor}
              isBlog={false}
              title="CCEditor 💻"
              description="A real-time collaborative coding platform that allows users to create coding rooms, chat, and edit code together. Featuring support for multiple languages, custom themes, and live user activity logs, this app provides a seamless collaborative environment perfect for group coding sessions or learning."
              ghLink="https://github.com/KhamessiTaha/CCE"
              demoLink="https://cceditor-e1b05.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ps}
              isBlog={false}
              title="ParticleSimulator ⚡"
              description="An engaging physics sandbox that brings elements to life. This real-time simulation engine models complex particle interactions between powder, water, fire, and more, creating a fascinating playground for exploring physical phenomena through an intuitive interface."
              ghLink="https://github.com/KhamessiTaha/ParticleSimulator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htru2}
              isBlog={false}
              title="HTRU2 Pulsar Detection 🌟"
              description="Journey into deep space with this advanced machine learning project that detects pulsating neutron stars. Using sophisticated algorithms trained on the HTRU2 dataset, this system analyzes radio telescope data to identify these cosmic lighthouses with remarkable accuracy."
              ghLink="https://github.com/KhamessiTaha/HRTU2-Pulsar-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alpr}
              isBlog={false}
              title="ALPR System 🔍"
              description="A state-of-the-art Automatic License Plate Recognition system that pushes the boundaries of computer vision. Using advanced neural networks and image processing techniques, this solution achieves near real-time plate detection and character recognition with exceptional accuracy."
              ghLink="https://github.com/KhamessiTaha/ALPR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              isBlog={false}
              title="Shell.ai Energy Optimizer 🌍"
              description="An innovative solution for the Shell.ai Hackathon that tackles global energy challenges. This optimization model leverages AI to balance energy accessibility and sustainability, contributing to a lower-carbon future while ensuring affordable energy access for all."
              ghLink="https://github.com/KhamessiTaha/Shell.ai-Hackathon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petmatch}
              isBlog={false}
              title="PetMatch 🐾"
              description="A heartwarming full-stack application that connects people with their perfect pet companions. Built with Angular and powered by PHP/Node.js, this platform uses intelligent matching algorithms to consider personality, lifestyle, and preferences, creating lasting bonds between humans and pets."
              ghLink="https://github.com/KhamessiTaha/MiniProjeWeb"
            />
          </Col>
        </Row>
      </Container>

      {/* Styles for animations and effects */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.6; }
          }

          .project-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(167,139,250,0.15) 0%, transparent 70%);
            pointer-events: none;
          }

          .project-card {
            transform: translateY(0);
            transition: transform 0.3s ease-in-out;
          }

          .project-card:hover {
            transform: translateY(-10px);
            z-index: 2;
          }

          @media (max-width: 768px) {
            .project-section {
              padding: 60px 0;
            }
            
            h1 {
              font-size: 2em;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Projects;
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
import cosmicvue from "../../Assets/Projects/cosmicvue.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carvision}
              isBlog={false}
              title="CarVision"
              description="AI-driven project that uses deep learning to classify cars and predict their prices from images and photos. It combines Python, TensorFlow, and a mobile app built with Flutter, Node.js and MongoDB."
              ghLink="https://github.com/KhamessiTaha/CarVisionProject"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmicvue}
              isBlog={false}
              title="CosmicVue"
              description="As part of the 2024 NASA International Space Apps Challenge, I developed CosmicVue – an interactive web app simulating the solar system and visualizing Near-Earth Objects (NEOs) like asteroids and comets using real-time NASA data. 🌌."
              ghLink="https://github.com/KhamessiTaha/CosmoArchitects"
              demoLink="https://cosmicvue.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ps}
              isBlog={false}
              title="ParticleSimulator"
              description="A particle simulation game with various elements such as powder, water, fire, steam, and wood. Users can create particles and interact with them in a physics-based environment."
              ghLink="https://github.com/KhamessiTaha/ParticleSimulator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htru2}
              isBlog={false}
              title="HTRU2 Pulsar Detection"
              description="Developed machine learning ​models to detect pulsar ​signals in radio telescope ​data, trained on labeled ​datasets from the UCI ​Machine Learning Repository."
              ghLink="https://github.com/KhamessiTaha/HRTU2-Pulsar-Detection"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alpr}
              isBlog={false}
              title="ALPR System"
              description="Developed models for license ​plate detection and character ​recognition in images and ​video frames, achieving near-​real-time processing."
              ghLink="https://github.com/KhamessiTaha/ALPR"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              isBlog={false}
              title="Shell.ai-Hackathon Optimisation Model"
              description="Shell.ai Hackathon for Sustainable and Affordable Energy: digital solution to tackle real energy challenges and help build a lower-carbon world where everyone can access and afford energy."
              ghLink="https://github.com/KhamessiTaha/Shell.ai-Hackathon"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petmatch}
              isBlog={false}
              title="PetMatch"
              description="PetMatch is an Angular web app with a PHP and Node.js backend that helps users find their ideal pet. Whether you’re looking for a cat or a dog, PetMatch matches you with pets that fit your preferences, offering a seamless and intuitive experience."
              ghLink="https://github.com/KhamessiTaha/MiniProjeWeb"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

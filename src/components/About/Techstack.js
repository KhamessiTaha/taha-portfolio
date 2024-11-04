import React, { useState } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiAngularSimple,
  DiMysql,
  DiHtml5,
  DiBootstrap,
  DiUnitySmall,
} from "react-icons/di";
import {
  SiFlutter,
  SiTypescript,
  SiSpringboot,
  SiFirebase,
  SiThreedotjs,
  SiGnubash,
  SiExpress,
  SiSocketdotio,
  SiCsharp,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Techstack() {
  const technologies = [
    {
      category: "Languages",
      items: [
        { icon: DiJavascript1, name: "JavaScript", color: "#F7DF1E" },
        { icon: DiPython, name: "Python", color: "#3776AB" },
        { icon: DiJava, name: "Java", color: "#007396" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: SiCsharp, name: "C#", color: "#239120" },
        { icon: SiGnubash, name: "Bash", color: "#4EAA25" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { icon: DiHtml5, name: "HTML5", color: "#E34F26" },
        { icon: DiReact, name: "React", color: "#61DAFB" },
        { icon: DiAngularSimple, name: "Angular", color: "#DD0031" },
        { icon: DiBootstrap, name: "Bootstrap", color: "#7952B3" },
        { icon: SiFlutter, name: "Flutter", color: "#02569B" },
        { icon: SiThreedotjs, name: "THREE.js", color: "#000000" },
        { icon: DiUnitySmall, name: "Unity", color: "#000000" },
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { icon: DiNodejs, name: "Node.js", color: "#339933" },
        { icon: SiExpress, name: "Express.js", color: "#000000" },
        { icon: SiSocketdotio, name: "Socket.IO", color: "#010101" },
        { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
        { icon: DiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: DiMysql, name: "MySQL", color: "#4479A1" },
        { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
        { icon: TbApi, name: "RESTful APIs", color: "#FF5733" },
      ]
    },
    {
      category: "Enterprise",
      items: [
        { icon: DiJava, name: "Java EE", color: "#007396" },
        { icon: DiMysql, name: "PL/SQL", color: "#F80000" },
      ]
    }
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  const renderTooltip = (name) => (
    <Tooltip id={`tooltip-${name}`}>
      {name}
    </Tooltip>
  );

  const techIconStyle = (color, isHovered) => ({
    transition: "all 0.3s ease-in-out",
    margin: "16px",
    opacity: isHovered ? 1 : 0.8,
    color: color,
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    boxShadow: isHovered 
      ? `0 0 20px ${color}40, 0 0 30px ${color}30, 0 0 40px rgba(255, 255, 255, 0.1)`
      : "0 4px 8px rgba(0, 0, 0, 0.2)",
    transform: isHovered ? "translateY(-5px) scale(1.1)" : "none",
    position: "relative",
    zIndex: isHovered ? 2 : 1,
    width: "150px",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    aspectRatio: "1",
  });

  const iconWrapperStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const iconStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  return (
    <div className="tech-stack-container bg-gradient-to-r from-slate-900 to-purple-900" 
         style={{ 
           padding: "48px 0",
           position: "relative",
           overflow: "hidden"
         }}>
      <div className="stars" style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        animation: "twinkle 2s infinite alternate",
        opacity: 0.5,
      }} />
      
      {technologies.map((category, index) => (
        <div key={index} 
             style={{ 
               marginBottom: "56px",
               position: "relative",
               zIndex: 1
             }}>
          <h3 style={{
            textAlign: "center",
            marginBottom: "32px",
            color: "#a78bfa",
            fontSize: "1.75em",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(167, 139, 250, 0.5)",
          }}>
            {category.category}
          </h3>
          <Row style={{ 
            justifyContent: "center", 
            padding: "0 24px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}>
            {category.items.map((tech, techIndex) => (
              <Col 
                xs={6} 
                md={2} 
                key={techIndex}
                className="tech-icons"
                style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  marginBottom: "24px"
                }}
              >
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip(tech.name)}
                >
                  <div
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={techIconStyle(tech.color, hoveredTech === tech.name)}
                  >
                    <div style={iconWrapperStyle}>
                      <tech.icon style={iconStyle} />
                    </div>
                  </div>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.6; }
          }
          
          .tech-icons:hover {
            z-index: 10;
          }
        `}
      </style>
    </div>
  );
}

export default Techstack;
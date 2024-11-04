import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#ffffff", "#87ceeb", "#E3E3E3"],
          },
          shape: {
            type: ["circle", "star"],
            options: {
              star: {
                sides: 5
              }
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#464646",
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none",
            random: true,
            straight: false,
            speed: 0.8,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.3,
              sync: false,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.3,
              },
            },
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            push: {
              particles_nb: 3,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "./Assets/home-bg.jpg",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        fps_limit: 60,
      }}
    />
  );
}

export default Particle;
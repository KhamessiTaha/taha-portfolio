import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "AI Enthusiast",
          "Space Explorer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;

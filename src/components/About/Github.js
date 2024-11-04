import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaRocket } from "react-icons/fa";

const Github = () => {
  const containerStyle = {
    padding: "48px 0",
    position: "relative",
    overflow: "hidden",
    // Removed the background gradient to make it transparent
  };

  const starsStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
    animation: "twinkle 2s infinite alternate",
    opacity: 0.5,
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "32px",
    color: "#a78bfa",
    fontSize: "1.75em",
    fontWeight: "bold",
    textShadow: "0 0 10px rgba(167, 139, 250, 0.5)",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  };

  const calendarWrapperStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
    margin: "0 auto",
    maxWidth: "900px",
    position: "relative",
    zIndex: 1,
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(167, 139, 250, 0.1)",
  };

  // Custom theme for the GitHub calendar
  const customTheme = {
    level0: 'rgba(167, 139, 250, 0.1)',
    level1: 'rgba(192, 132, 245, 0.4)',
    level2: 'rgba(192, 132, 245, 0.6)',
    level3: 'rgba(192, 132, 245, 0.8)',
    level4: '#c084f5',
  };

  const tooltipStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    border: '1px solid #c084f5',
    borderRadius: '6px',
    padding: '8px',
    fontSize: '14px',
    color: '#fff',
    boxShadow: '0 0 10px rgba(192, 132, 245, 0.3)',
  };

  const titleDecorationStyle = {
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #c084f5, transparent)',
  };

  const rocketStyle = {
    fontSize: '1.2em',
    animation: 'float 3s ease-in-out infinite',
  };

  return (
    <div style={containerStyle}>
      <div style={starsStyle} />
      
      <div style={{ position: 'relative' }}>
        <div style={titleDecorationStyle} />
        <div style={headingStyle}>
          <FaRocket style={rocketStyle} />
          <span>Cosmic Code Journey</span>
          <FaRocket style={{ ...rocketStyle, transform: 'scaleX(-1)' }} />
        </div>
      </div>
      
      <div style={calendarWrapperStyle}>
        <GitHubCalendar
          username="khamessitaha"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          style={{ margin: "0 auto" }}
          theme={customTheme}
          renderBlock={(block, activity) => (
            <div
              style={{
                backgroundColor: activity.color,
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                transform: activity.count === 0 ? 'scale(0.95)' : 'scale(1)',
                boxShadow: activity.count > 0 ? `0 0 8px ${activity.color}` : 'none',
              }}
            >
              {block}
            </div>
          )}
          tooltipRenderer={(day) => (
            <div style={tooltipStyle}>
              {day.count} contributions on {day.date}
            </div>
          )}
        />
      </div>

      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.6; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 10px rgba(167, 139, 250, 0.5); }
            50% { text-shadow: 0 0 20px rgba(192, 132, 245, 0.8); }
          }
        `}
      </style>
    </div>
  );
};

export default Github;